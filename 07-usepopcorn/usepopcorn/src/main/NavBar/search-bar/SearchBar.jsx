import { useState } from 'react';

export function SearchBar({ setMovies, onChangeQuery }) {
  const [query, setQuery] = useState("");

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