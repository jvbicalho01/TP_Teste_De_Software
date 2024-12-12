import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../src/components/Filter/Filter";

describe("Filter Component", () => {
  const mockSetFilter = jest.fn();
  const mockSetSort = jest.fn();

  test("renders the filter component", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    expect(screen.getByText("Filtrar:")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Ordem alfabética:")).toBeInTheDocument();
  });

  test("calls setFilter when filter dropdown is changed", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    const select = screen.getByTestId("status-select");
    fireEvent.change(select, { target: { value: "Completed" } });
    expect(mockSetFilter).toHaveBeenCalledWith("Completed");
  });

  test("calls setSort when Asc button is clicked", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    const ascButton = screen.getByTestId("asc-button");
    fireEvent.click(ascButton);
    expect(mockSetSort).toHaveBeenCalledWith("Asc");
  });

  test("calls setSort when Desc button is clicked", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    const descButton = screen.getByTestId("desc-button");
    fireEvent.click(descButton);
    expect(mockSetSort).toHaveBeenCalledWith("Desc");
  });
});
