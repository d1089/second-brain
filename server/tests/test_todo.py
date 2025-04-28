from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_todo():
    response = client.post("/todos", json={"title": "Create API"})
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == "Create API"
    assert "id" in data
