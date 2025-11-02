package com.autodevstudio.userbilling.services;

import com.autodevstudio.userbilling.entities.ResourceUsage;
import com.autodevstudio.userbilling.repositories.ResourceUsageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BillingService {

    @Autowired
    private ResourceUsageRepository resourceUsageRepository;

    public void reportUsage(String projectId, String resourceType, Double quantity) {
        ResourceUsage usage = new ResourceUsage();
        usage.setProjectId(projectId);
        usage.setResourceType(resourceType);
        usage.setQuantity(quantity);
        usage.setTimestamp(LocalDateTime.now());
        resourceUsageRepository.save(usage);
    }

    public void generateInvoices() {
        // This would contain the logic to aggregate usage and create invoices
        System.out.println("Generating invoices...");
    }
}
