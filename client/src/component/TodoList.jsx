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

export function TodoList() {
  const [newTodo, setNewTodo] = useState(""); // State for new todo
  const [todos, setTodos] = useState([]); // State to hold the list of todos

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo(""); // Clear the input after adding
    }
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

          {/* Input field with placeholder */}
          <TextField
            placeholder="Enter todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // Handle input change
            fullWidth
          />

          {/* Button to add todo */}
          <Button variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </Button>

          {/* Todo list */}
          <List>
            {todos.map((todo, index) => (
              <ListItem key={index}>{todo}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
