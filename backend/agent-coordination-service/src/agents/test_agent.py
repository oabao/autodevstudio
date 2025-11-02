from src.agents.base_agent import BaseAgent, AgentResult

class TestAgent(BaseAgent):
    async def execute(self, task):
        print(f"Executing TestAgent with task: {task}")
        gherkin_test = """
Feature: User Login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard
"""
        return AgentResult(success=True, data={"status": "success", "test_cases": gherkin_test})
