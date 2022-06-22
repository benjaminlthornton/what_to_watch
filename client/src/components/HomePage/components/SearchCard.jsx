import React from 'react';

export default function SearchCard(props) {
  return (
    <article className="anime-card">
				<figure>
					<img
						src={props.anime.image_url}
						alt="Anime Image" />
				</figure>
				<a
					href={props.anime.url}
					target="_blank"
					rel="noreferrer">
					<h3>{ props.anime.title }</h3>
				</a>
			<button onClick={e => props.AddToWatch(e, props.anime)} className="add-to-list">Add to Watch List</button>
		</article>
  )
}