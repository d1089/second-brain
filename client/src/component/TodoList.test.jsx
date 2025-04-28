import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("TodoList", () => {
  it("should allow the user to add a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/enter todo/i);
    fireEvent.change(input, { target: { value: "Buy Bread" } });

    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    const todoItem = screen.getByText("Buy Bread");
    expect(todoItem).toBeInTheDocument();
  });

  it("should allow the user to mark a todo as completed", () => {
    render(<TodoList />);

    // Add a todo
    const input = screen.getByPlaceholderText(/enter todo/i);
    fireEvent.change(input, { target: { value: "Buy Bread" } });
    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    // Find the todo item and mark it as completed
    const todoItem = screen.getByText("Buy Bread");
    fireEvent.click(todoItem); // Click to mark as completed

    // Assert that the todo item is marked as completed (check for completed class or style)
    expect(todoItem).toHaveClass("completed"); // Or check if it has strikethrough
  });
});
