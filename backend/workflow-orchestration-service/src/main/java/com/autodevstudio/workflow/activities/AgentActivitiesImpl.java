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

    @Override
    public String generateTests(String design) {
        String url = agentServiceUrl + "/api/agents/test/generate";
        return restTemplate.postForObject(url, Collections.singletonMap("design", design), String.class);
    }

    @Override
    public String developCode(String tests) {
        String url = agentServiceUrl + "/api/agents/coder/develop";
        return restTemplate.postForObject(url, Collections.singletonMap("tests", tests), String.class);
    }

    @Override
    public String debugCode(String code) {
        String url = agentServiceUrl + "/api/agents/debugger/debug";
        return restTemplate.postForObject(url, Collections.singletonMap("code", code), String.class);
    }

    @Override
    public String refactorCode(String code) {
        String url = agentServiceUrl + "/api/agents/refactor/run";
        return restTemplate.postForObject(url, Collections.singletonMap("code", code), String.class);
    }

    @Override
    public String scanCode(String code) {
        String url = agentServiceUrl + "/api/agents/security/scan";
        return restTemplate.postForObject(url, Collections.singletonMap("code", code), String.class);
    }

    @Override
    public String generateDocs(String code) {
        String url = agentServiceUrl + "/api/agents/docs/generate";
        return restTemplate.postForObject(url, Collections.singletonMap("code", code), String.class);
    }
}
