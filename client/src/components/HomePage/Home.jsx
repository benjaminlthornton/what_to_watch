import React from 'react';
import ToWatchCard from './components/ToWatchCard'
import WatchedCard from './components/WatchedCard'
import Search from './components/Search'
import SearchCard from './components/SearchCard'

// Huzzah for jsx!
export default function Home(props) {
   return (
     <main>
       <div className="main-head">
      <Search
       search={props.search} HandleSearch={props.HandleSearch}
       SetSearch={props.SetSearch}
       />
      </div>
      <div className="anime-list">
          {props.animeList.map((anime) => (
            <SearchCard key={anime.mal_id} anime={anime} AddToWatch={props.AddToWatch}/>
          ))}
      </div>
      <h3>To Watch</h3>
      <div className="anime-list">
          {props.toWatchList.map((anime) => (
            <ToWatchCard key={anime.mal_id} anime={anime} />
          ))}
      </div>
      <h3>Watched</h3>
      <div className="Watched">
        {/* <ul className="userShowList">
          {toWatch.map((show) => (
            <WatchedCard key={show.data.mal_id} show={show} />
          ))}
        </ul> */}
      </div>
    </main>
    )
}
