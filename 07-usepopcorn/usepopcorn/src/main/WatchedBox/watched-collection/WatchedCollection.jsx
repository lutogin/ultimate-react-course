import { WatchedMovieItem } from '../watched-movie-item/WatchedMovieItem';

export function WatchedCollection({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => <WatchedMovieItem movie={movie}/>)}
    </ul>
  )
}
