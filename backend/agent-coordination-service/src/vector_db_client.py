import asyncio
from typing import List, Dict

class VectorDBClient:
    async def similarity_search(self, query: str, project_id: str, limit: int = 5) -> List[Dict]:
        # This is a mock client. In a real implementation, this would
        # connect to a vector database like Pinecone or Weaviate.
        await asyncio.sleep(0.5)  # Simulate network latency
        return [
            {"id": "doc1", "content": f"Mock document 1 for query: {query}", "score": 0.9},
            {"id": "doc2", "content": f"Mock document 2 for query: {query}", "score": 0.8},
        ]
