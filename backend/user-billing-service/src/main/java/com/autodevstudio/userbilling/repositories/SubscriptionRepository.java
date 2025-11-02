package com.autodevstudio.userbilling.repositories;

import com.autodevstudio.userbilling.entities.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}
