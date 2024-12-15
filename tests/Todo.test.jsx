import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "../src/components/Todo/Todo";

describe("Todo Component", () => {
  const mockTodo = {
    id: 1,
    text: "Test Todo",
    category: "Test Category",
    isCompleted: false,
  };

  const mockCompleteTodo = jest.fn();
  const mockRemoveTodo = jest.fn();

  test("renders the todo component", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
  });

  test("calls completeTodo when complete button is clicked", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const completeButton = screen.getByText("Completar");
    fireEvent.click(completeButton);
    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test("calls removeTodo when remove button is clicked", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);
    expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test("applies the correct background color", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="blue"
      />
    );
    const todoElement = screen.getByTestId("todo");
    expect(todoElement).toHaveStyle("background-color: blue");
  });

  test("applies line-through style when todo is completed", () => {
    const completedTodo = { ...mockTodo, isCompleted: true };
    render(
      <Todo
        todo={completedTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const todoElement = screen.getByTestId("todo");
    expect(todoElement).toHaveStyle("text-decoration: line-through");
  });

  test("calls completeTodo multiple times on multiple clicks", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const completeButton = screen.getByText("Completar");
    fireEvent.click(completeButton);
    fireEvent.click(completeButton);
    expect(mockCompleteTodo).toHaveBeenCalledTimes(3);
    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test("calls removeTodo multiple times on multiple clicks", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);
    fireEvent.click(removeButton);
    expect(mockRemoveTodo).toHaveBeenCalledTimes(3);
    expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test("renders the todo with different text and category", () => {
    const newTodo = {
      id: 2,
      text: "Another Todo",
      category: "Another Category",
      isCompleted: false,
    };
    render(
      <Todo
        todo={newTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    expect(screen.getByText("Another Todo")).toBeInTheDocument();
    expect(screen.getByText("Another Category")).toBeInTheDocument();
  });

  test("renders without crashing when no color is provided", () => {
    render(
      <Todo
        todo={mockTodo}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
      />
    );
    const todoElement = screen.getByTestId("todo");
    expect(todoElement).toBeInTheDocument();
  });

  test("renders correctly when category is empty", () => {
    const todoWithoutCategory = { ...mockTodo, category: "" };
    render(
      <Todo
        todo={todoWithoutCategory}
        completeTodo={mockCompleteTodo}
        removeTodo={mockRemoveTodo}
        color="white"
      />
    );
    const categoryElement = screen.getByTestId("todo-category");
    expect(categoryElement.textContent).toBe("");
  });

  test("renders without crashing when completeTodo is not provided", () => {
    render(<Todo todo={mockTodo} removeTodo={mockRemoveTodo} color="white" />);
    const completeButton = screen.getByText("Completar");
    fireEvent.click(completeButton);
  });

  test("renders without crashing when removeTodo is not provided", () => {
    render(
      <Todo todo={mockTodo} completeTodo={mockCompleteTodo} color="white" />
    );
    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);
  });
});
