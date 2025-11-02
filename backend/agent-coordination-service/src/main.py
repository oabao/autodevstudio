from fastapi import FastAPI
from pydantic import BaseModel
from src.agents.requirement_agent import RequirementAgent
from src.agents.techstack_agent import TechStackAgent
from src.agents.architect_agent import ArchitectAgent
from src.agents.prototype_agent import PrototypeAgent
from src.agents.feedback_agent import FeedbackAgent
from src.agents.base_agent import AgentTask
import uvicorn

app = FastAPI()

class RequirementRequest(BaseModel):
    projectId: str
    requirements: dict

class FeedbackRequest(BaseModel):
    projectId: str
    feedback: list

@app.post("/api/agents/requirement/analyze")
async def analyze_requirements(request: RequirementRequest):
    agent = RequirementAgent()
    task = AgentTask(task_id="1", task_type="analyze_requirements", data={"projectId": request.projectId})
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/techstack/recommend")
async def recommend_tech_stack(request: RequirementRequest):
    agent = TechStackAgent()
    task = AgentTask(task_id="2", task_type="recommend_tech_stack", data={"requirements": request.requirements})
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/architect/design")
async def design_architecture(request: RequirementRequest):
    agent = ArchitectAgent()
    task = AgentTask(task_id="3", task_type="design_architecture", data={"requirements": request.requirements})
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/prototype/generate")
async def generate_prototype(request: RequirementRequest):
    agent = PrototypeAgent()
    task = AgentTask(task_id="4", task_type="generate_prototype", data={"requirements": request.requirements})
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/feedback/process")
async def process_feedback(request: FeedbackRequest):
    agent = FeedbackAgent()
    task = AgentTask(task_id="5", task_type="process_feedback", data={"feedback": request.feedback})
    result = await agent.execute(task)
    return result.data

@app.get("/")
def read_root():
    return {"message": "Agent Coordination Service is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8083)
