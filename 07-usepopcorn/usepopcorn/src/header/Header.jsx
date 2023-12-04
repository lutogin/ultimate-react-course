import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState("");

  function handleOnSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <header>
      <input name="search" value={search} onChange={handleOnSearchChange}/>
    </header>
  )
}