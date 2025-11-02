from src.agents.base_agent import BaseAgent, AgentResult

class DebuggerAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing DebuggerAgent with task: {task}")
        analysis = "The login function fails for incorrect passwords."
        suggestion = "Ensure the password check is correct and handles edge cases."
        return AgentResult(success=True, data={"status": "success", "analysis": analysis, "suggestion": suggestion})
