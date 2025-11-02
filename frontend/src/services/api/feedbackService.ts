import useUserStore from "../stores/userStore";
import config from "../config";

const API_URL = `${config.agentServiceUrl}/api/agents`;

export const submitFeedback = async (projectId: string, feedback: string) => {
  const { jwt } = useUserStore.getState();
  if (!jwt) {
    throw new Error("User is not authenticated");
  }

  const response = await fetch(`${API_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({ project_id: projectId, feedback }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Feedback submission failed:", errorBody);
    throw new Error('Failed to submit feedback');
  }

  return response.json();
};
