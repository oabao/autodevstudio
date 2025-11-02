from .base_agent import BaseAgent, AgentTask, AgentResult

class TechStackAgent(BaseAgent):
    async def execute(self, task: AgentTask) -> AgentResult:
        # In a real implementation, this would use an LLM to analyze the
        # requirements from task.data and recommend tech stacks.
        # For now, we'll return a mock response.
        mock_recommendations = {
            "recommendations": [
                {
                    "id": "1",
                    "name": "MERN Stack",
                    "description": "MongoDB, Express.js, React, Node.js. A popular choice for full-stack JavaScript applications.",
                    "pros": ["Fast development", "Single language (JavaScript)", "Large community"],
                    "cons": ["MongoDB can be challenging for relational data", "Less structured than other options"],
                },
                {
                    "id": "2",
                    "name": "Spring Boot + React",
                    "description": "A robust and scalable backend with a flexible frontend. Ideal for enterprise-level applications.",
                    "pros": ["Highly scalable", "Strongly typed (Java)", "Mature ecosystem"],
                    "cons": ["Steeper learning curve", "Can be verbose"],
                },
                {
                    "id": "3",
                    "name": "Python (Django/FastAPI) + React",
                    "description": "Great for data-intensive applications and rapid development.",
                    "pros": ["Excellent for AI/ML integration", "Simple and clean syntax", "Fast to develop"],
                    "cons": ["Performance can be a concern for high-traffic APIs", "Less standardized than Java"],
                },
            ]
        }
        return AgentResult(success=True, data=mock_recommendations)
