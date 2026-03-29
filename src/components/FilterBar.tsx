import type { TaskFilter } from "../types/task";

interface FilterBarProps {
  current: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const filters: TaskFilter[] = ["All", "Pending", "Completed", "Overdue"];

function FilterBar({ current, onChange }: FilterBarProps) {
  return (
    <div className="control-card">
      <p className="control-label">Filter</p>
      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${current === filter ? "active" : ""}`}
            onClick={() => onChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;

