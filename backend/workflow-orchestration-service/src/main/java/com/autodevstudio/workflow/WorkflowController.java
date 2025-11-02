package com.autodevstudio.workflow;

import io.temporal.client.WorkflowClient;
import io.temporal.client.WorkflowOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/workflow")
public class WorkflowController {

    @Autowired
    private WorkflowClient workflowClient;

    @PostMapping("/projects")
    public String createProject(@RequestBody ProjectCreationRequest request) {
        SoftwareDevelopmentWorkflow workflow = workflowClient.newWorkflowStub(
                SoftwareDevelopmentWorkflow.class,
                WorkflowOptions.newBuilder()
                        .setTaskQueue("SOFTWARE_DEVELOPMENT_TASK_QUEUE")
                        .setWorkflowId("project-" + request.getProjectId())
                        .build());

        WorkflowClient.start(workflow::execute, request.getProjectId());

        return "Workflow started for project " + request.getProjectId();
    }

    @GetMapping("/projects/{projectId}/requirements")
    public String getRequirementAnalysisResult(@PathVariable String projectId) {
        SoftwareDevelopmentWorkflow workflow = workflowClient.newWorkflowStub(
                SoftwareDevelopmentWorkflow.class, "project-" + projectId);
        return workflow.getRequirementAnalysisResult();
    }

    @GetMapping("/projects/{projectId}/tech-stack")
    public String getTechStackRecommendationResult(@PathVariable String projectId) {
        SoftwareDevelopmentWorkflow workflow = workflowClient.newWorkflowStub(
                SoftwareDevelopmentWorkflow.class, "project-" + projectId);
        return workflow.getTechStackRecommendationResult();
    }

    @PostMapping("/projects/{projectId}/tech-stack")
    public String selectTechStack(@PathVariable String projectId, @RequestBody String selectedStack) {
        SoftwareDevelopmentWorkflow workflow = workflowClient.newWorkflowStub(
                SoftwareDevelopmentWorkflow.class, "project-" + projectId);
        workflow.confirmTechStack(selectedStack);
        return "Tech stack selection received";
    }
}
