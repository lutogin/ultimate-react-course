import { useState } from "react";
import { Logo } from './logo/Logo';
import { NumResult } from './num-result/NumResult';
import { SearchBar } from './search-bar/SearchBar';

export function NavBar({ movies, setMovies }) {
  const [query, setQuery] = useState("");

  function handleChangeQuery(e) {
    setQuery(e.target.value);

    setMovies((movies) => movies.slice(0,2));
  }

  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} onChangeQuery={handleChangeQuery} />
      <NumResult movies={movies}/>
    </nav>
  )
}
