import useUserStore from "../stores/userStore";
import config from "../config";

const API_URL = `${config.workflowServiceUrl}/api/workflow`;

export const createProject = async (projectId: string) => {
  const { jwt } = useUserStore.getState();
  if (!jwt) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({ projectId }),
  });

  if (!response.ok) {
    throw new Error('Failed to create project');
  }

  return response.text();
};

export const getProjectStatus = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/status`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch project status');
    return response.json();
};

export const getArchitectureDesign = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/architecture`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch architecture design');
    return response.json();
};

export const getPrototype = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/prototype`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch prototype');
    return response.json();
};

export const getTestCases = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/test-cases`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch test cases');
    return response.json();
};

export const getDevelopedCode = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/developed-code`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch developed code');
    return response.json();
};

export const getRefactoredCode = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/refactored-code`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch refactored code');
    return response.json();
};

export const getSecurityScanResult = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/security-scan`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch security scan result');
    return response.json();
};

export const getDocumentationResult = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/${projectId}/documentation`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch documentation result');
    return response.json();
};

export const deployProject = async (projectId: string, deploymentTarget: string, config: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/projects/${projectId}/deploy`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({ deploymentTarget, config }),
    });

    if (!response.ok) {
        throw new Error('Failed to deploy project');
    }

    return response.text();
};

export const requestNewFeature = async (projectId: string, newRequirement: string, context: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    const response = await fetch(`${API_URL}/projects/${projectId}/new-feature`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({ newRequirement, context }),
    });

    if (!response.ok) {
        throw new Error('Failed to request new feature');
    }

    return response.text();
};

export const getMonitoringData = async (projectId: string) => {
    const { jwt } = useUserStore.getState();
    if (!jwt) throw new Error("User is not authenticated");

    // This is a placeholder for the actual monitoring API endpoint
    const response = await fetch(`${config.agentServiceUrl}/api/monitoring/${projectId}`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
    });
    if (!response.ok) throw new Error('Failed to fetch monitoring data');
    return response.json();
};
