import useUserStore from "../stores/userStore";
import config from "../../config";

const API_URL = `${config.workflowServiceUrl}/api/workflow`;

export const getRequirementAnalysis = async (projectId: string) => {
  const { jwt } = useUserStore.getState();
  if (!jwt) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_URL}/projects/${projectId}/requirements`, {
    headers: {
      'Authorization': `Bearer ${jwt}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch requirement analysis');
  }

  return response.json();
};
