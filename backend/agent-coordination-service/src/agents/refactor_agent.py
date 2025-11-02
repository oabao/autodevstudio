from src.agents.base_agent import BaseAgent, AgentResult

class RefactorAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing RefactorAgent with task: {task}")
        suggestion = "The login function can be simplified by returning the boolean expression directly."
        refactored_code = """
def login(username, password):
    return username == "testuser" and password == "password"
"""
        return AgentResult(success=True, data={"status": "success", "suggestion": suggestion, "refactored_code": refactored_code})
