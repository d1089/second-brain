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
});
