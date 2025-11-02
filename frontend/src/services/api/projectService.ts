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
