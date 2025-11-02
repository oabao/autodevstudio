package com.autodevstudio.userbilling.controllers;

import com.autodevstudio.userbilling.services.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/billing")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PostMapping("/usage")
    public void reportUsage(@RequestBody Map<String, Object> payload) {
        String projectId = (String) payload.get("projectId");
        String resourceType = (String) payload.get("resourceType");
        Double quantity = (Double) payload.get("quantity");
        billingService.reportUsage(projectId, resourceType, quantity);
    }

    @PostMapping("/invoices/generate")
    public void generateInvoices() {
        billingService.generateInvoices();
    }
}
