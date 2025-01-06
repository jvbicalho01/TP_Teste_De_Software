import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../src/components/Search/Search";

test("renders Search component", () => {
  render(<Search search="" setSearch={() => {}} />);
  const searchTitle = screen.getByText(/Pesquisar:/i);
  expect(searchTitle).toBeInTheDocument();
});

test("renders input element", () => {
  render(<Search search="" setSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText("Digite para pesquisar");
  expect(inputElement).toBeInTheDocument();
});

test("updates search value on input change", () => {
  const setSearchMock = jest.fn();
  render(<Search search="" setSearch={setSearchMock} />);

  const inputElement = screen.getByPlaceholderText("Digite para pesquisar");
  fireEvent.change(inputElement, { target: { value: "Nova tarefa" } });
  expect(setSearchMock).toHaveBeenCalledWith("Nova tarefa");
});
