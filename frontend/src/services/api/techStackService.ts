import useUserStore from "../stores/userStore";
import config from "../../config";

const API_URL = `${config.workflowServiceUrl}/api/workflow`;

export const getTechStackRecommendations = async (projectId: string) => {
  const { jwt } = useUserStore.getState();
  if (!jwt) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_URL}/projects/${projectId}/tech-stack`, {
    headers: {
      'Authorization': `Bearer ${jwt}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tech stack recommendations');
  }

  return response.json();
};

export const selectTechStack = async (projectId: string, selectedStack: any) => {
  const { jwt } = useUserStore.getState();
  if (!jwt) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_URL}/projects/${projectId}/tech-stack`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(selectedStack),
  });

  if (!response.ok) {
    throw new Error('Failed to select tech stack');
  }

  return response.text();
};
