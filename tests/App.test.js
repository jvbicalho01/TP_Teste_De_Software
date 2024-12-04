// FILE: src/App.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  test("renders initial todos", () => {
    render(<App />);
    expect(
      screen.getByText("Criar funcionalidade no sistema")
    ).toBeInTheDocument();
    expect(screen.getByText("Ir para a academia")).toBeInTheDocument();
    expect(screen.getByText("Estudar React")).toBeInTheDocument();
  });

  // test("adds a new todo", () => {
  //   render(<App />);
  //   fireEvent.change(screen.getByPlaceholderText("Add a new task"), {
  //     target: { value: "New Todo" },
  //   });
  //   fireEvent.click(screen.getByText("Add"));
  //   expect(screen.getByText("New Todo")).toBeInTheDocument();
  // });

  test("removes a todo", () => {
    render(<App />);

    // Verifica se a tarefa inicial está presente
    expect(
      screen.getByText("Criar funcionalidade no sistema")
    ).toBeInTheDocument();

    // Seleciona o botão de remoção pelo texto "X"
    fireEvent.click(screen.getByText("X"));

    // Verifica se a tarefa foi removida
    expect(
      screen.queryByText("Criar funcionalidade no sistema")
    ).not.toBeInTheDocument();
  });

  // test("completes a todo", () => {
  //   render(<App />);
  //   fireEvent.click(screen.getByText("Complete", { selector: "button" }));
  //   expect(screen.getByText("Criar funcionalidade no sistema")).toHaveClass(
  //     "completed"
  //   );
  // });

  // test("searches todos", () => {
  //   render(<App />);
  //   fireEvent.change(screen.getByPlaceholderText("Search tasks"), {
  //     target: { value: "academia" },
  //   });
  //   expect(screen.getByText("Ir para a academia")).toBeInTheDocument();
  //   expect(
  //     screen.queryByText("Criar funcionalidade no sistema")
  //   ).not.toBeInTheDocument();
  // });

  // test("filters todos", () => {
  //   render(<App />);
  //   fireEvent.click(screen.getByText("Completed"));
  //   expect(
  //     screen.queryByText("Criar funcionalidade no sistema")
  //   ).not.toBeInTheDocument();
  // });

  // test("sorts todos", () => {
  //   render(<App />);
  //   fireEvent.click(screen.getByText("Sort Desc"));
  //   const todos = screen.getAllByTestId("todo-text");
  //   expect(todos[0].textContent).toBe("Ir para a academia");
  //   expect(todos[1].textContent).toBe("Estudar React");
  //   expect(todos[2].textContent).toBe("Criar funcionalidade no sistema");
  // });
});
