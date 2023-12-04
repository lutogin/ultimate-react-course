export function SearchBar({ query, onChangeQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={onChangeQuery}
    />
  );
}