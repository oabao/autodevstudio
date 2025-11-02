package com.autodevstudio.workflow;

import io.temporal.workflow.QueryMethod;
import io.temporal.workflow.SignalMethod;
import io.temporal.workflow.WorkflowInterface;
import io.temporal.workflow.WorkflowMethod;

@WorkflowInterface
public interface SoftwareDevelopmentWorkflow {

    @WorkflowMethod
    void execute(String projectId);

    @SignalMethod
    void confirmRequirements(String confirmation);

    @SignalMethod
    void confirmArchitecture(String confirmation);

    @QueryMethod
    String getStatus();

    @QueryMethod
    String getRequirementAnalysisResult();

    @QueryMethod
    String getTechStackRecommendationResult();

    @SignalMethod
    void confirmTechStack(String selectedStack);
}
