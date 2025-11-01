# backend/agent-coordination-service/src/main.py
import os
from fastapi import FastAPI
from dotenv import load_dotenv
from .llm_client import LLMClient
from .vector_db_client import VectorDBClient
from .agent_registry import AgentRegistry
from .agent_coordinator import AgentCoordinator

# Load environment variables
load_dotenv()

# Initialize the FastAPI app
app = FastAPI()

# Initialize clients
llm_client = LLMClient(api_key=os.getenv("OPENAI_API_KEY"))
vector_db_client = VectorDBClient(api_key=os.getenv("PINECONE_API_KEY"), environment=os.getenv("PINECONE_ENVIRONMENT"))

# Initialize registry and coordinator
agent_registry = AgentRegistry(llm_client, vector_db_client)
agent_coordinator = AgentCoordinator(agent_registry)

@app.post("/run_agent/{agent_name}")
async def run_agent(agent_name: str, task: dict):
    try:
        result = agent_coordinator.dispatch_task(agent_name, task)
        return {"result": result}
    except ValueError as e:
        return {"error": str(e)}

@app.get("/")
def read_root():
    return {"message": "Agent Coordination Service is running"}
