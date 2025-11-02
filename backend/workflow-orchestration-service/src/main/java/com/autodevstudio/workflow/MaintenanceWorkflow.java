package com.autodevstudio.workflow;

import io.temporal.workflow.WorkflowInterface;
import io.temporal.workflow.WorkflowMethod;

@WorkflowInterface
public interface MaintenanceWorkflow {
    @WorkflowMethod
    void deployProject(String projectId, String deploymentTarget, String config);

    @WorkflowMethod
    void requestNewFeature(String projectId, String newRequirement, String context);
}
