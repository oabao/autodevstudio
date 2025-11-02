import asyncio

class LLMClient:
    async def generate(self, prompt: str) -> str:
        # This is a mock client. In a real implementation, this would
        # make a call to an LLM API like OpenAI, Anthropic, etc.
        await asyncio.sleep(1)  # Simulate network latency
        return f"Mock LLM response for prompt: {prompt}"
