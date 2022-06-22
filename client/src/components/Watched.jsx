import React from 'react';
const jikanjs = require('@mateoaranda/jikanjs');

export default function WatchedCard({ show }) {
  return (
    <div className="show-card">
      {show.data.mal_id}
    </div>
  )
}