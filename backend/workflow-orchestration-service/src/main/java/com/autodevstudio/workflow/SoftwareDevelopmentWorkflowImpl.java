package com.autodevstudio.workflow;

import com.autodevstudio.workflow.activities.AgentActivities;
import io.temporal.activity.ActivityOptions;
import io.temporal.common.RetryOptions;
import io.temporal.workflow.Workflow;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;

public class SoftwareDevelopmentWorkflowImpl implements SoftwareDevelopmentWorkflow {

    private static final Logger logger = LoggerFactory.getLogger(SoftwareDevelopmentWorkflowImpl.class);

    private final AgentActivities agentActivities = Workflow.newActivityStub(
            AgentActivities.class,
            ActivityOptions.newBuilder()
                    .setStartToCloseTimeout(Duration.ofSeconds(60))
                    .setRetryOptions(RetryOptions.newBuilder()
                            .setMaximumAttempts(3)
                            .build())
                    .build());

    private String status = "STARTED";
    private String requirementAnalysisResult;
    private String techStackRecommendationResult;

    @Override
    public void execute(String projectId) {
        logger.info("Workflow started for project: " + projectId);
        status = "ANALYZING_REQUIREMENTS";
        requirementAnalysisResult = agentActivities.analyzeRequirements(projectId);
        status = "REQUIREMENTS_ANALYZED";

        status = "RECOMMENDING_TECH_STACK";
        techStackRecommendationResult = agentActivities.recommendTechStack(requirementAnalysisResult);
        status = "TECH_STACK_RECOMMENDED";
    }

    @Override
    public void confirmRequirements(String confirmation) {
        // Handle requirement confirmation
        status = "REQUIREMENTS_CONFIRMED";
    }

    @Override
    public void confirmArchitecture(String confirmation) {
        // Handle architecture confirmation
        status = "ARCHITECTURE_CONFIRMED";
    }

    @Override
    public String getStatus() {
        return status;
    }

    @Override
    public String getRequirementAnalysisResult() {
        return requirementAnalysisResult;
    }

    @Override
    public String getTechStackRecommendationResult() {
        return techStackRecommendationResult;
    }

    @Override
    public void confirmTechStack(String selectedStack) {
        // Handle tech stack confirmation
        status = "TECH_STACK_CONFIRMED";
    }
}
