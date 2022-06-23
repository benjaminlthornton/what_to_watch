import React from 'react';

export default function WatchedCard({ anime }) {
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
			{/* <button className="add-to-list">Add to Watched</button> */}
		</article>
  )
}