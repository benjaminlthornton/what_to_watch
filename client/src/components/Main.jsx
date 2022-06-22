import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './HomePage/Home';

export default function Main() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

  const [user, setUser] = useState('');

 function retrieveWatched(user) {
    axios({
      method: 'GET',
      url: '/watched',
      data: {
        user
      }
    })
    .then((res) => {
      setWatched((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveWatched:', err);
    });
  }

  function retrieveToWatch(user) {
    axios({
      method: 'GET',
      url: '/towatch',
      data: {
        user
      }
    })
    .then((res) => {
      setToWatch((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }

  function addToWatch(e) {
    let show = e.target.value;
    axios({
      method: 'POST',
      url: '/towatch',
      data: {
        user,
        show
      }
    })
    .then((res) => {
      setToWatch((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }

  function addWatched(e) {
    let show = e.target.value;
    axios({
      method: 'POST',
      url: '/watched',
      data: {
        user,
        show
      }
    })
    .then((res) => {
      setToWatch((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }

  function removeToWatch(e) {
    let show = e.target.value;
    axios({
      method: 'DELETE',
      url: '/towatch',
      data: {
        user,
        show
      }
    })
    .then((res) => {
      setToWatch((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }

  function removeWatched(e) {
    let show = e.target.value;
    axios({
      method: 'DELETE',
      url: '/watched',
      data: {
        user,
        show
      }
    })
    .then((res) => {
      setToWatch((s) => s.concat(res.data.results));
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }


	const GetTopAnime = async () => {
    // console.log("inside get top anime")
		const temp = await fetch(`https://api.jikan.moe/v4/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v4/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

	useEffect(() => {
    // console.log('inside useEffect')
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
					animeList={animeList} />
			</div>
		</div>
	);
}