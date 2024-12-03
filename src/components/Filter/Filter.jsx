import React from "react";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter" data-cy="filter">
      <h2 data-cy="filter-title">Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p data-cy="filter-status">Status:</p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            data-cy="status-select"
          >
            <option value="All" data-cy="text-all">
              Todas
            </option>
            <option value="Completed" data-cy="text-completed">
              Completas
            </option>
            <option value="Incomplete" data-cy="text-uncompleted">
              Incompletas
            </option>
          </select>
        </div>
        <div>
          <p data-cy="filter-description">Ordem alfabética:</p>
          <button data-cy="asc-button" onClick={() => setSort("Asc")}>
            Asc
          </button>
          <button data-cy="desc-button" onClick={() => setSort("Desc")}>
            Desc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
