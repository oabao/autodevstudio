package com.autodevstudio.userbilling.controllers;

import com.autodevstudio.userbilling.entities.Subscription;
import com.autodevstudio.userbilling.services.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping("/")
    public Subscription createSubscription(@RequestBody Map<String, Object> payload) {
        Long userId = Long.valueOf((Integer) payload.get("userId"));
        String plan = (String) payload.get("plan");
        return subscriptionService.createSubscription(userId, plan);
    }
}
