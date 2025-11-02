package com.autodevstudio.userbilling.repositories;

import com.autodevstudio.userbilling.entities.ResourceUsage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceUsageRepository extends JpaRepository<ResourceUsage, Long> {
}
