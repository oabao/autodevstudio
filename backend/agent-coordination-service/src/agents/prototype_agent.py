from .base_agent import BaseAgent, AgentTask, AgentResult

class PrototypeAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # This mock agent returns a URL to a placeholder image representing the prototype.
        # A real implementation would generate an interactive prototype (e.g., HTML/JS, or a Figma design).
        mock_prototype = {
            "prototypeUrl": "https://via.placeholder.com/800x600.png?text=Interactive+UI+Prototype",
            "designSpecs": {
                "colorPalette": ["#1677ff", "#f0f2f5", "#ffffff"],
                "typography": "Roboto, sans-serif"
            }
        }
        return AgentResult(success=True, data=mock_prototype)
