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

  test("dropdown starts with the correct value", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    const select = screen.getByTestId("status-select");
    expect(select.value).toBe("All");
  });

  test("buttons maintain the correct functionality after multiple interactions", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );
    const ascButton = screen.getByTestId("asc-button");
    const descButton = screen.getByTestId("desc-button");
    const select = screen.getByTestId("status-select");

    fireEvent.change(select, { target: { value: "Completed" } });
    fireEvent.click(ascButton);
    fireEvent.click(descButton);

    expect(mockSetFilter).toHaveBeenCalledWith("Completed");
    expect(mockSetSort).toHaveBeenCalledWith("Asc");
    expect(mockSetSort).toHaveBeenCalledWith("Desc");
  });

  test("handles missing setFilter function gracefully", () => {
    const { container } = render(<Filter filter="All" setSort={mockSetSort} />);
    expect(container).toBeInTheDocument();
  });

  test("handles missing setSort function gracefully", () => {
    const { container } = render(
      <Filter filter="All" setFilter={mockSetFilter} />
    );
    expect(container).toBeInTheDocument();
  });

  test("dropdown options have the correct data attributes", () => {
    render(
      <Filter filter="All" setFilter={mockSetFilter} setSort={mockSetSort} />
    );

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(3);

    expect(options[0]).toHaveAttribute("data-cy", "text-all");
    expect(options[1]).toHaveAttribute("data-cy", "text-completed");
    expect(options[2]).toHaveAttribute("data-cy", "text-uncompleted");

    expect(options[0].textContent).toBe("Todas");
    expect(options[1].textContent).toBe("Completas");
    expect(options[2].textContent).toBe("Incompletas");
  });
});
