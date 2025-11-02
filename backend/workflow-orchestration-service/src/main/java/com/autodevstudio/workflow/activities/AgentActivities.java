package com.autodevstudio.workflow.activities;

import io.temporal.activity.ActivityInterface;

@ActivityInterface
public interface AgentActivities {
    String analyzeRequirements(String projectId);
    String recommendTechStack(String requirements);
    String designArchitecture(String requirements);
    String generatePrototype(String architecture);
    String processFeedback(String feedback);
    String generateTests(String design);
    String developCode(String tests);
    String debugCode(String code);
    String refactorCode(String code);
    String scanCode(String code);
    String generateDocs(String code);
}
