from src.agents.base_agent import BaseAgent, AgentResult

class DebuggerAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing DebuggerAgent with task: {task}")
        analysis = "The login function fails for incorrect passwords."
        suggestion = "Ensure the password check is correct and handles edge cases."
        return AgentResult(success=True, data={"status": "success", "analysis": analysis, "suggestion": suggestion})

    async def handle_alert(self, alert_context: dict):
        print(f"Handling monitoring alert with context: {alert_context}")
        # In a real implementation, this would involve a more sophisticated analysis
        # of the alert context using an LLM.
        analysis = f"Root cause analysis of the alert indicates a potential issue with {alert_context.get('service')}."
        suggestion = "Recommendation: Increase the memory allocation for the service and monitor its performance."
        return {"analysis": analysis, "suggestion": suggestion}
