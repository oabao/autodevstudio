# backend/agent-coordination-service/src/llm_client.py
import openai

class LLMClient:
    def __init__(self, api_key):
        openai.api_key = api_key

    def generate(self, prompt, max_tokens=150):
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=max_tokens
        )
        return response.choices[0].text.strip()
