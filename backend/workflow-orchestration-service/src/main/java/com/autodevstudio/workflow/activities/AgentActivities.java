package com.autodevstudio.workflow.activities;

import io.temporal.activity.ActivityInterface;

@ActivityInterface
public interface AgentActivities {
    String analyzeRequirements(String projectId);
    String recommendTechStack(String requirements);
    String designArchitecture(String requirements);
    String generatePrototype(String architecture);
    String processFeedback(String feedback);
}
