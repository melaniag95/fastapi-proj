from pydantic import BaseModel

class Record(BaseModel):
    Anno: int
    Regione: str
    Percentuale: float
