from fastapi import FastAPI
from pydantic import BaseModel
from src.agents.requirement_agent import RequirementAgent
from src.agents.base_agent import AgentTask
import uvicorn

app = FastAPI()

class RequirementRequest(BaseModel):
    projectId: str

@app.post("/api/agents/requirement/analyze")
async def analyze_requirements(request: RequirementRequest):
    agent = RequirementAgent()
    task = AgentTask(task_id="1", task_type="analyze_requirements", data={"projectId": request.projectId})
    result = await agent.execute(task)
    return result.data

@app.get("/")
def read_root():
    return {"message": "Agent Coordination Service is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8083)
