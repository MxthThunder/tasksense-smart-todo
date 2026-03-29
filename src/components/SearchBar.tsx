interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="control-card">
      <label htmlFor="task-search" className="control-label">
        Search by title
      </label>
      <input
        id="task-search"
        className="text-input"
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;

