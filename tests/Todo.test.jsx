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

  // test("applies line-through style when todo is completed", () => {
  //   const completedTodo = { ...mockTodo, isCompleted: true };
  //   render(
  //     <Todo
  //       todo={completedTodo}
  //       completeTodo={mockCompleteTodo}
  //       removeTodo={mockRemoveTodo}
  //       color="white"
  //     />
  //   );
  //   const todoElement = screen.getByText("Test Todo");
  //   expect(todoElement).toHaveStyle("text-decoration: line-through");
  // });
});
