import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './HomePage/Home';
import axios from 'axios';

export default function Main() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [toWatchList, SetToWatch] = useState([]);
	const [watchedList, SetWatched] = useState([]);
	const [search, SetSearch] = useState("");
  const isMounted = useRef(false);
  const [user, setUser] = useState(1);

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
    if (watchedList.indexOf(anime) < 0) {
      SetWatched((r) => r.concat(anime))
      SetToWatch(toWatchList.filter(show => show.mal_id !== anime.mal_id))
    }
  }

  const FetchUserData = async() => {
    const temp = await axios({
      url: '/towatch',
      method: 'GET',
      data: {
        userId: user,
      }
    })
    .then(temp => {
      SetToWatch([temp.data.toWatchList])
      SetWatched([temp.data.watchedList])
    })
    // .then(() => SetToWatch([temp.data.toWatchList]))
    // .then(() =>SetWatched([temp.data.watchedList]))
    .catch((err) =>{
      console.log('Error fetching user data', err)
    })
  }

  // const dbAddToWatch = () => {
  //   console.log('dbAddToWath', watchedList, toWatchList)
  //   axios({
  //     url: '/towatch',
  //     method: 'POST',
  //     data: {
  //       userId: 1,
  //       toWatchList: toWatchList
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res)
  //     res.sendStatus(200)
  //   })
  //   .catch((err) => {
  //     console.log('error dbAddToWatch', err)
  //   })
  // }

  const dbAddWatched = () => {
    if(isMounted.current) {
    console.log('dbAddWatch', toWatchList, watchedList)
    axios({
      url: '/watched',
      method: 'POST',
      data: {
        userId: user,
        toWatchList: toWatchList,
        watchedList: watchedList
      }
    })
    .then((res) => {
      console.log("success dbAddWatch")
      console.log('dbAddWatched response', res.config.data)
    })
    .catch((err) => {
      console.log('error dbAddToWatch', err)
    })
  } else {
    isMounted.current = true;
  }
  }


	useEffect(() => {
		GetTopAnime();
    // FetchUserData();
	}, []);

  useEffect(() => {
    dbAddWatched()
    // FetchUserData();
  }, [toWatchList])



  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar
          topAnime={topAnime} AddWatched={AddWatched} />
        <Home
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
          SetToWatch={SetToWatch}
          toWatchList={toWatchList}
          AddToWatch={AddToWatch}
          watchedList={watchedList}
          AddWatched={AddWatched}
          />
      </div>
    </div>
  );
}