# FastAPI Project

This repository contains a full-stack web application based on **FastAPI** for the backend and **React** (with **Vite**) for the frontend. The infrastructure is orchestrated via **Docker Compose** to facilitate local development and deployment.

## Project Structure

```
fastapi-proj-main/
├── backend/              
│   ├── app/
│   │   ├── main.py       
│   │   ├── api/          
│   │   ├── models/       
│   │   ├── services/    
│   │   └── data/         
│   └── requirements.txt  
├── frontend/             
│   ├── src/              
│   ├── public/           
│   └── package.json      
├── docker-compose.yml   
├── Dockerfile            
└── .gitignore
```

## Quick Start with Docker

### Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Commands

```bash
docker-compose up --build
```

This command:

- Starts the FastAPI backend at `http://localhost:8000`
- Starts the React frontend at `http://localhost:5173`

You can access:

- **API**: `http://localhost:8000/docs` (Swagger UI)
- **Web App**: `http://localhost:5173`

## Manual Start (without Docker)

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Configuration

The project uses `.env` files to avoid hardcoding frontend and backend URLs in the code.

### 📁 Where to create `.env` files

- **Backend** → `backend/.env`
- **Frontend** → `frontend/.env`

### Typical variables

Example `backend/.env`:

```
FRONTEND_URL=http://localhost:5173
```

Example `frontend/.env`:

```
VITE_BACKEND_URL=http://localhost:8000
```

In the code (e.g. `fetch`, `axios`, etc.) these variables are read via:

- Python (with `os.getenv`)
- JavaScript (with `import.meta.env.VITE_BACKEND_URL`)

**Note:** to use variables in the frontend with Vite, they must be **prefixed with `VITE_`**.


## 🛠 Technologies

- FastAPI
- Uvicorn
- Pydantic
- React
- Vite
- Docker + Compose