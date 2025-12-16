"""Pydantic models for the backend."""

from pydantic import BaseModel


class Item(BaseModel):
    id: int
    name: str
    description: str | None = None
