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
    private String architectureDesignResult;
    private String prototypeGenerationResult;
    private String testCasesResult;
    private String developedCodeResult;
    private String refactoredCodeResult;

    @Override
    public void execute(String projectId) {
        logger.info("Workflow started for project: " + projectId);
        status = "ANALYZING_REQUIREMENTS";
        requirementAnalysisResult = agentActivities.analyzeRequirements(projectId);
        status = "REQUIREMENTS_ANALYZED";

        status = "RECOMMENDING_TECH_STACK";
        techStackRecommendationResult = agentActivities.recommendTechStack(requirementAnalysisResult);
        status = "TECH_STACK_RECOMMENDED";

        // Wait for tech stack confirmation
        Workflow.await(() -> "TECH_STACK_CONFIRMED".equals(status));

        status = "DESIGNING_ARCHITECTURE";
        architectureDesignResult = agentActivities.designArchitecture(requirementAnalysisResult);
        status = "ARCHITECTURE_DESIGNED";

        status = "GENERATING_PROTOTYPE";
        prototypeGenerationResult = agentActivities.generatePrototype(architectureDesignResult);
        status = "PROTOTYPE_GENERATED";

        // Basic TDD Loop
        status = "GENERATING_TESTS";
        testCasesResult = agentActivities.generateTests(architectureDesignResult);
        status = "TESTS_GENERATED";

        status = "DEVELOPING_CODE";
        developedCodeResult = agentActivities.developCode(testCasesResult);
        status = "CODE_DEVELOPED";

        status = "REFACTORING_CODE";
        refactoredCodeResult = agentActivities.refactorCode(developedCodeResult);
        status = "CODE_REFACTORED";

        status = "DEVELOPMENT_COMPLETE";
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
    public String getArchitectureDesign() {
        return architectureDesignResult;
    }

    @Override
    public String getPrototype() {
        return prototypeGenerationResult;
    }

    @Override
    public String getTestCases() {
        return testCasesResult;
    }

    @Override
    public String getDevelopedCode() {
        return developedCodeResult;
    }

    @Override
    public String getRefactoredCode() {
        return refactoredCodeResult;
    }

    @Override
    public void confirmTechStack(String selectedStack) {
        // Handle tech stack confirmation
        status = "TECH_STACK_CONFIRMED";
    }
}
