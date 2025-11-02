from src.agents.base_agent import BaseAgent, AgentResult

class DocWriterAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing DocWriterAgent with task: {task}")
        documents = {
            "user_manual": "/docs/user_manual.md",
            "api_documentation": "/docs/api.md",
        }
        return AgentResult(success=True, data={"status": "success", "documents": documents})
