from fastapi import APIRouter, Query
from typing import List, Optional
from app.models.record import Record
from app.services.loader import load_data

router = APIRouter()
data = load_data()

@router.get("/data", response_model=List[Record])
def get_data(year: Optional[int] = None, region: Optional[str] = None):
    results = data
    if year:
        results = [r for r in results if r.Anno == year]
    if region:
        results = [r for r in results if r.Regione.lower() == region.lower()]
    return results
