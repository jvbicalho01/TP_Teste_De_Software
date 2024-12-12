import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoForm from "../src/components/TodoForm/TodoForm";

describe("TodoForm Component", () => {
  const mockAddTodo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the todo form component", () => {
    render(<TodoForm addTodo={mockAddTodo} />);
    expect(screen.getByText("Criar tarefa:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite o título")).toBeInTheDocument();
    expect(screen.getByText("Selecione uma categoria")).toBeInTheDocument();
    expect(screen.getByText("Cor:")).toBeInTheDocument();
  });

  test("calls addTodo when form is submitted with valid data", () => {
    render(<TodoForm addTodo={mockAddTodo} />);
    fireEvent.change(screen.getByPlaceholderText("Digite o título"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByTestId("select-category"), {
      target: { value: "Trabalho" },
    });
    fireEvent.click(screen.getAllByTestId("color")[0]);
    fireEvent.click(screen.getByText("Criar tarefa"));

    expect(mockAddTodo).toHaveBeenCalledWith("New Task", "Trabalho", "#77172E");
  });

  test("shows alert when title is missing", () => {
    window.alert = jest.fn();
    render(<TodoForm addTodo={mockAddTodo} />);
    fireEvent.change(screen.getByTestId("select-category"), {
      target: { value: "Trabalho" },
    });
    fireEvent.click(screen.getAllByTestId("color")[0]);
    fireEvent.click(screen.getByText("Criar tarefa"));

    expect(window.alert).toHaveBeenCalledWith(
      "Você esqueceu de digitar o título da tarefa!"
    );
  });

  test("shows alert when category is missing", () => {
    window.alert = jest.fn();
    render(<TodoForm addTodo={mockAddTodo} />);
    fireEvent.change(screen.getByPlaceholderText("Digite o título"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getAllByTestId("color")[0]);
    fireEvent.click(screen.getByText("Criar tarefa"));

    expect(window.alert).toHaveBeenCalledWith(
      "Você esqueceu de selecionar a categoria da tarefa!"
    );
  });

  test("shows alert when color is missing", () => {
    window.alert = jest.fn();
    render(<TodoForm addTodo={mockAddTodo} />);
    fireEvent.change(screen.getByPlaceholderText("Digite o título"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByTestId("select-category"), {
      target: { value: "Trabalho" },
    });
    fireEvent.click(screen.getByText("Criar tarefa"));

    expect(window.alert).toHaveBeenCalledWith(
      "Você esqueceu de selecionar a cor!"
    );
  });
});
