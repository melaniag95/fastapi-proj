from fastapi import FastAPI
from app.api.v1 import endpoints

app = FastAPI(title="API Sovraffollamento Abitativo")

app.include_router(endpoints.router, prefix="/api/v1")