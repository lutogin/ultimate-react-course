import { useState } from 'react';

export function ListBox({ movies }) {
  const [isOpenListBox, setIsOpenListBox] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpenListBox((open) => !open)}
      >
        {isOpenListBox ? "–" : "+"}
      </button>
      {isOpenListBox && (
        <ul className="list">
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}