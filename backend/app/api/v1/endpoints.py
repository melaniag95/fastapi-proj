from fastapi import APIRouter, Query
from typing import List, Optional
from app.models.record import Record
from app.services.loader import load_data

router = APIRouter()
data = load_data()

@router.get("/data", response_model=List[Record])
def get_data(
    year: Optional[int] = None,
    region: Optional[str] = None,
    sort_by: Optional[str] = Query(None, description="Field to sort by (Anno, Regione, Percentuale)"),
    sort_order: Optional[str] = Query("asc", description="Sort order: 'asc' or 'desc'")
):
    results = data
    if year:
        results = [r for r in results if r.Anno == year]
    if region:
        results = [r for r in results if r.Regione.lower() == region.lower()]
    if sort_by:
        try:
            results.sort(key=lambda r: getattr(r, sort_by), reverse=(sort_order == "desc"))
        except AttributeError:
            pass  # Or raise HTTPException(status_code=400, detail="Invalid sort field")
    return results

