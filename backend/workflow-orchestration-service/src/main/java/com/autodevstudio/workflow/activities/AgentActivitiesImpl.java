package com.autodevstudio.workflow.activities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@Component
public class AgentActivitiesImpl implements AgentActivities {

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public String analyzeRequirements(String projectId) {
        String url = "http://localhost:8083/api/agents/requirement/analyze"; // Assuming agent service is on 8083
        return restTemplate.postForObject(url, Collections.singletonMap("projectId", projectId), String.class);
    }

    @Override
    public String recommendTechStack(String requirements) {
        String url = "http://localhost:8083/api/agents/techstack/recommend";
        return restTemplate.postForObject(url, Collections.singletonMap("requirements", requirements), String.class);
    }
}
