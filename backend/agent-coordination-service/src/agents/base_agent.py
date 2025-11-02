from abc import ABC, abstractmethod
from typing import Dict, Any

class AgentTask:
    def __init__(self, task_id: str, task_type: str, data: Dict[str, Any]):
        self.task_id = task_id
        self.task_type = task_type
        self.data = data

class AgentResult:
    def __init__(self, success: bool, data: Dict[str, Any] = None):
        self.success = success
        self.data = data or {}

class BaseAgent(ABC):
    @abstractmethod
    async def execute(self, task: AgentTask) -> AgentResult:
        pass
