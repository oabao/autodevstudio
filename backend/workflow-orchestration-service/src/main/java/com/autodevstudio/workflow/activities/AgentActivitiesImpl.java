package com.autodevstudio.workflow.activities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@Component
public class AgentActivitiesImpl implements AgentActivities {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${agent.service.url}")
    private String agentServiceUrl;

    @Override
    public String analyzeRequirements(String projectId) {
        String url = agentServiceUrl + "/api/agents/requirement/analyze";
        return restTemplate.postForObject(url, Collections.singletonMap("projectId", projectId), String.class);
    }

    @Override
    public String recommendTechStack(String requirements) {
        String url = agentServiceUrl + "/api/agents/techstack/recommend";
        return restTemplate.postForObject(url, Collections.singletonMap("requirements", requirements), String.class);
    }

    @Override
    public String designArchitecture(String requirements) {
        String url = agentServiceUrl + "/api/agents/architect/design";
        return restTemplate.postForObject(url, Collections.singletonMap("requirements", requirements), String.class);
    }

    @Override
    public String generatePrototype(String architecture) {
        String url = agentServiceUrl + "/api/agents/prototype/generate";
        return restTemplate.postForObject(url, Collections.singletonMap("architecture", architecture), String.class);
    }

    @Override
    public String processFeedback(String feedback) {
        String url = agentServiceUrl + "/api/agents/feedback/process";
        return restTemplate.postForObject(url, Collections.singletonMap("feedback", feedback), String.class);
    }
}
