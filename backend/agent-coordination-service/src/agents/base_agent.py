# backend/agent-coordination-service/src/agents/base_agent.py
from abc import ABC, abstractmethod

class BaseAgent(ABC):
    def __init__(self, llm_client, vector_db_client):
        self.llm_client = llm_client
        self.vector_db_client = vector_db_client

    @abstractmethod
    def execute(self, task):
        pass
