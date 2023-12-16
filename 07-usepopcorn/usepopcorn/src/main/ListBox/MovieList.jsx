import { ListItem } from './ListItem';

export function MovieList({ movies, setSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <ListItem movie={movie} setSelectedMovie={setSelectedMovie}/>
      ))}
    </ul>
  )
}