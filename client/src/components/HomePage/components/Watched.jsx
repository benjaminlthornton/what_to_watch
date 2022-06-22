import React from 'react';

export default function WatchedCard({ show }) {
  return (
    <div className="show-card">
      {show.data.mal_id}
    </div>
  )
}