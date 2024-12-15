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
});
