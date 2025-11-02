package com.autodevstudio.workflow.activities;

import io.temporal.activity.ActivityInterface;

@ActivityInterface
public interface AgentActivities {
    String analyzeRequirements(String projectId);
    String recommendTechStack(String requirements);
}
