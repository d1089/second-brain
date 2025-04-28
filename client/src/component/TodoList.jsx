import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import axios from "axios"; // 📦 Import axios

export function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // 🛜 Handle adding a new todo using axios
  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;

    try {
      const response = await axios.post("http://localhost:8000/todos", {
        title: newTodo,
      });

      const createdTodo = response.data;
      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo(""); // Clear input after successful add
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Toggle completion (only in UI for now)
  const handleToggleCompletion = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <Card>
        <CardContent
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography variant="h4" align="center">
            Todo List
          </Typography>

          {/* Input field */}
          <TextField
            placeholder="Enter todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            fullWidth
          />

          {/* Add button */}
          <Button variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </Button>

          {/* Todo list */}
          <List>
            {todos.map((todo, index) => (
              <ListItem
                key={todo.id ?? index}
                onClick={() => handleToggleCompletion(index)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.title}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
