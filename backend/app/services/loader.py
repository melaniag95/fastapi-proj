import json
from pathlib import Path
from typing import List
from app.models.record import Record

def load_data() -> List[Record]:
    file_path = Path("app/data/overcrowding.json")
    with file_path.open("r", encoding="utf-8") as file:
        try:
            data = json.load(file)
            return [Record(**item) for item in data]
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            return []