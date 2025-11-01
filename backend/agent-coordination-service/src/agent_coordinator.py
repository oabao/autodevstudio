# backend/agent-coordination-service/src/agent_coordinator.py
from .agent_registry import AgentRegistry

class AgentCoordinator:
    def __init__(self, agent_registry):
        self.agent_registry = agent_registry

    def dispatch_task(self, agent_name, task):
        agent = self.agent_registry.get_agent(agent_name)
        if agent:
            return agent.execute(task)
        else:
            raise ValueError(f"Agent '{agent_name}' not found")
