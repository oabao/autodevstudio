# backend/agent-coordination-service/src/agent_registry.py
from .agents.requirement_agent import RequirementAgent
from .agents.techstack_agent import TechStackAgent
from .agents.architect_agent import ArchitectAgent
# ... import other agents as they are created

class AgentRegistry:
    def __init__(self, llm_client, vector_db_client):
        self.agents = {
            "requirement": RequirementAgent(llm_client, vector_db_client),
            "techstack": TechStackAgent(llm_client, vector_db_client),
            "architect": ArchitectAgent(llm_client, vector_db_client),
            # ... initialize other agents
        }

    def get_agent(self, name):
        return self.agents.get(name)
