import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  test("renderiza todos iniciais", () => {
    render(<App />);
    expect(
      screen.getByText("Criar funcionalidade no sistema")
    ).toBeInTheDocument();
    expect(screen.getByText("Ir para a academia")).toBeInTheDocument();
    expect(screen.getByText("Estudar React")).toBeInTheDocument();
  });
});

test("adiciona todo", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Digite o título");
  const select = screen.getByTestId("select-category");
  const button = screen.getByText("Criar tarefa");

  fireEvent.change(input, { target: { value: "Nova tarefa" } });
  fireEvent.change(select, { target: { value: "Trabalho" } });
  const colorButton = screen.getAllByTestId("color")[0];
  fireEvent.click(colorButton);
  fireEvent.click(button);

  expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
});

test("remove todo inicial", () => {
  render(<App />);
  const removeButtons = screen.getAllByText("X");
  fireEvent.click(removeButtons[0]);

  expect(
    screen.queryByText("Criar funcionalidade no sistema")
  ).not.toBeInTheDocument();
});
