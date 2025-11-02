from fastapi import FastAPI
from pydantic import BaseModel
from src.agents.requirement_agent import RequirementAgent
from src.agents.techstack_agent import TechStackAgent
from src.agents.architect_agent import ArchitectAgent
from src.agents.prototype_agent import PrototypeAgent
from src.agents.feedback_agent import FeedbackAgent
from src.agents.test_agent import TestAgent
from src.agents.coder_agent import CoderAgent
from src.agents.debugger_agent import DebuggerAgent
from src.agents.refactor_agent import RefactorAgent
from src.agents.base_agent import AgentTask
import uvicorn

app = FastAPI()

class ProjectRequest(BaseModel):
    projectId: str
    data: dict

@app.post("/api/agents/requirement/analyze")
async def analyze_requirements(request: ProjectRequest):
    agent = RequirementAgent()
    task = AgentTask(task_id="1", task_type="analyze_requirements", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/techstack/recommend")
async def recommend_tech_stack(request: ProjectRequest):
    agent = TechStackAgent()
    task = AgentTask(task_id="2", task_type="recommend_tech_stack", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/architect/design")
async def design_architecture(request: ProjectRequest):
    agent = ArchitectAgent()
    task = AgentTask(task_id="3", task_type="design_architecture", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/prototype/generate")
async def generate_prototype(request: ProjectRequest):
    agent = PrototypeAgent()
    task = AgentTask(task_id="4", task_type="generate_prototype", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/feedback/process")
async def process_feedback(request: ProjectRequest):
    agent = FeedbackAgent()
    task = AgentTask(task_id="5", task_type="process_feedback", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/test/generate")
async def generate_tests(request: ProjectRequest):
    agent = TestAgent()
    task = AgentTask(task_id="6", task_type="generate_tests", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/coder/develop")
async def develop_code(request: ProjectRequest):
    agent = CoderAgent()
    task = AgentTask(task_id="7", task_type="develop_code", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/debugger/debug")
async def debug_code(request: ProjectRequest):
    agent = DebuggerAgent()
    task = AgentTask(task_id="8", task_type="debug_code", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.post("/api/agents/refactor/run")
async def refactor_code(request: ProjectRequest):
    agent = RefactorAgent()
    task = AgentTask(task_id="9", task_type="refactor_code", data=request.data)
    result = await agent.execute(task)
    return result.data

@app.get("/")
def read_root():
    return {"message": "Agent Coordination Service is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8083)
