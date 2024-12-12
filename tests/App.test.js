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

  // test('adds a new todo', () => {
  //   render(<App />);
  //   const input = screen.getByPlaceholderText('Add a new task');
  //   const button = screen.getByText('Add');

  //   fireEvent.change(input, { target: { value: 'New Todo' } });
  //   fireEvent.click(button);

  //   expect(screen.getByText('New Todo')).toBeInTheDocument();
  // });

  // test('removes a todo', () => {
  //   render(<App />);
  //   const removeButtons = screen.getAllByText('Remove');
  //   fireEvent.click(removeButtons[0]);

  //   expect(screen.queryByText('Criar funcionalidade no sistema')).not.toBeInTheDocument();
  // });

  // test('completes a todo', () => {
  //   render(<App />);
  //   const completeButtons = screen.getAllByText('Complete');
  //   fireEvent.click(completeButtons[0]);

  //   expect(screen.getByText('Criar funcionalidade no sistema')).toHaveClass('completed');
  // });
});
