import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export function TodoList() {
  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <Card>
        <CardContent
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography variant="h4" align="center">
            Todo List
          </Typography>

          {/* Input field - placeholder="Enter todo" */}

          {/* Add button - text="Add" */}

          {/* List of todos - will come here */}
        </CardContent>
      </Card>
    </div>
  );
}
