from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Event(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    location: str
    date: datetime
