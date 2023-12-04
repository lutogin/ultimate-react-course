import { useState } from 'react';
import { WatchedSummary } from './watched-summary/WatchedSummary';
import { WatchedCollection } from './watched-collection/WatchedCollection';

export function WatchedBox({ watched }) {
  const [isOpenReview, setIsOpenReview] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpenReview((open) => !open)}
      >
        {isOpenReview ? "–" : "+"}
      </button>
      {isOpenReview && (
        <>
          <WatchedSummary watched={watched}/>
          <WatchedCollection watched={watched}/>
        </>
      )}
    </div>
  )
}