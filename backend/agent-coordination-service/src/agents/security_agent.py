from src.agents.base_agent import BaseAgent, AgentResult

class SecurityAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing SecurityAgent with task: {task}")
        report = {
            "sast_scan": {"status": "success", "vulnerabilities": 2},
            "dependency_scan": {"status": "success", "vulnerabilities": 1},
        }
        return AgentResult(success=True, data={"status": "success", "report": report})
