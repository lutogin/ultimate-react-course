import { WatchedMovieItem } from '../watched-item/WatchedMovieItem';

export function WatchedCollection({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => <WatchedMovieItem movie={movie}/>)}
    </ul>
  )
}
