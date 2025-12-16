"""Entry point for backend service (placeholder).
Run with: python -m backend.main
"""

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"status": "ok", "service": "backend"}
