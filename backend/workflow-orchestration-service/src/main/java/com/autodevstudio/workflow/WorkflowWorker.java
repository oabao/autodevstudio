package com.autodevstudio.workflow;

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

    @Override
    public void run(String... args) throws Exception {
        WorkerFactory factory = WorkerFactory.newInstance(workflowClient);
        Worker worker = factory.newWorker("SOFTWARE_DEVELOPMENT_TASK_QUEUE");
        worker.registerWorkflowImplementationTypes(SoftwareDevelopmentWorkflowImpl.class);
        factory.start();
    }
}
