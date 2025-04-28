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
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: newTodo, completed: false },
      ]);
      setNewTodo(""); // Clear input after adding
    }
  };

  // Handle toggling completion of a todo
  const handleToggleCompletion = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
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
            onChange={(e) => setNewTodo(e.target.value)} // Handle input change
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
                key={index}
                onClick={() => handleToggleCompletion(index)} // Toggle on click
                className={todo.completed ? "completed" : ""} // Add "completed" class if completed
                style={{
                  textDecoration: todo.completed ? "line-through" : "none", // Strike-through completed todos
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
