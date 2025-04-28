from fastapi import FastAPI, status
from app.models import TodoCreate, Todo

app = FastAPI()

# Temporary in-memory storage
todos = []
current_id = 1

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/todos", response_model=Todo, status_code=status.HTTP_201_CREATED)
def create_todo(todo: TodoCreate):
    global current_id
    new_todo = {"id": current_id, "title": todo.title}
    todos.append(new_todo)
    current_id += 1
    return new_todo