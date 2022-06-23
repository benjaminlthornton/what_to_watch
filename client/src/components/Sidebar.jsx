import React from 'react';

export default function Sidebar( { topAnime, AddToWatch }) {
  return (
		<aside>
			<nav>
				<h3>Top Anime</h3>
				{topAnime.map(anime => (
					<div key={anime.mal_id}>
						<a
							href={anime.url}
							target="_blank"

							rel="noreferrer">
							{ anime.title }
						</a>
						<button onClick={e => props.AddToWatch(e, props.anime)} className="add-to-list">Add to Watch List</button>
					</div>
				))}
			</nav>
		</aside>
	)
}