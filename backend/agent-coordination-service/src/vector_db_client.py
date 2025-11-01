# backend/agent-coordination-service/src/vector_db_client.py
import pinecone

class VectorDBClient:
    def __init__(self, api_key, environment):
        pinecone.init(api_key=api_key, environment=environment)
        self.index = pinecone.Index("autodevstudio")

    def query(self, vector, top_k=5):
        return self.index.query(vector=vector, top_k=top_k)

    def upsert(self, vectors):
        return self.index.upsert(vectors=vectors)
