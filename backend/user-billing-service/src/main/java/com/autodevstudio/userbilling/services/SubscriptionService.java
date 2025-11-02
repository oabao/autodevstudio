package com.autodevstudio.userbilling.services;

import com.autodevstudio.userbilling.entities.Subscription;
import com.autodevstudio.userbilling.repositories.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public Subscription createSubscription(Long userId, String plan) {
        Subscription subscription = new Subscription();
        subscription.setUserId(userId);
        subscription.setPlan(plan);
        subscription.setStartDate(LocalDate.now());
        subscription.setEndDate(LocalDate.now().plusMonths(1)); // 1 month subscription
        subscription.setStatus("ACTIVE");
        return subscriptionRepository.save(subscription);
    }
}
