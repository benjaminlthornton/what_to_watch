import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './HomePage/Home';

export default function Main() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [toWatchList, SetToWatch] = useState([]);
	const [WatchedList, SetWatched] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

  const AddToWatch = (e, anime) => {
    e.preventDefault();
    if (toWatchList.indexOf(anime) < 0)
    SetToWatch((r) => r.concat(anime))
  }

  const AddWatched = (e, anime) => {
    e.preventDefault();
    if (WatchedList.indexOf(anime) < 0) {
    SetWatched((r) => r.concat(anime))
    SetToWatch(toWatchList.filter(show => show.mal_id !== anime.mal_id))
    }
  }

	useEffect(() => {
		GetTopAnime();
	}, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar
          topAnime={topAnime} />
        <Home
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
          SetToWatch={SetToWatch}
          toWatchList={toWatchList}
          AddToWatch={AddToWatch}
          WatchedList={WatchedList}
          AddWatched={AddWatched}
          />
      </div>
    </div>
  );
}