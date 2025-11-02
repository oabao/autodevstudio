package com.autodevstudio.workflow;

import com.autodevstudio.workflow.activities.AgentActivities;
import io.temporal.client.WorkflowClient;
import io.temporal.worker.Worker;
import io.temporal.worker.WorkerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class WorkflowWorker implements CommandLineRunner {

    @Autowired
    private WorkflowClient workflowClient;

    @Autowired
    private AgentActivities agentActivities;

    @Override
    public void run(String... args) throws Exception {
        WorkerFactory factory = WorkerFactory.newInstance(workflowClient);

        Worker softwareDevelopmentWorker = factory.newWorker("SOFTWARE_DEVELOPMENT_TASK_QUEUE");
        softwareDevelopmentWorker.registerWorkflowImplementationTypes(SoftwareDevelopmentWorkflowImpl.class);
        softwareDevelopmentWorker.registerActivitiesImplementations(agentActivities);

        Worker maintenanceWorker = factory.newWorker("MAINTENANCE_TASK_QUEUE");
        maintenanceWorker.registerWorkflowImplementationTypes(MaintenanceWorkflowImpl.class);
        maintenanceWorker.registerActivitiesImplementations(agentActivities);

        factory.start();
    }
}
