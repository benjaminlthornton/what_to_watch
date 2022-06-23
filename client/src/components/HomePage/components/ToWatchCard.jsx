import React from 'react';

export default function ToWatchCard({ anime, AddWatched }) {
  return (
<article className="anime-card">
				<figure>
					<img
						src={anime.image_url}
						alt="Anime Image" />
				</figure>
				<a
					href={anime.url}
					target="_blank"
					rel="noreferrer">
					<h3>{ anime.title }</h3>
				</a>
			<button onClick={e => AddWatched(e, anime)} className="add-to-list">Add to Watched</button>
		</article>
  )
}