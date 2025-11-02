from src.agents.base_agent import BaseAgent, AgentResult

class CoderAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing CoderAgent with task: {task}")
        code = """
def login(username, password):
    if username == "testuser" and password == "password":
        return True
    return False
"""
        return AgentResult(success=True, data={"status": "success", "code": code})
