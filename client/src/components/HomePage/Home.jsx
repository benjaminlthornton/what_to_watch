import React from 'react';
import ToWatchCard from './components/ToWatch'
import WatchedCard from './components/Watched'
import Search from './components/Search'
import SearchCard from './components/SearchCard'

// Huzzah for jsx!
export default function Home(props) {


   return (
     <main>
     <h1>What to Watch</h1>
       <div className="main-head">
      <Search search={props.search} handleSearch={props.handleSearch} setSearch={props.SetSearch}/>
      </div>
      <div className="searchList">
        <ul className="list">
          {searchList.map((show) => (
            <SearchCard key={show.data.mal_id} show={show} />
          ))}
        </ul>
      </div>
      <h2>To Watch</h2>
      <div className="toWatch">
        <ul className="userShowList">
          {toWatch.map((show) => (
            <ToWatchCard key={show.data.mal_id} show={show} />
          ))}
        </ul>
      </div>
      <h2>Watched</h2>
      <div className="Watched">
        <ul className="userShowList">
          {toWatch.map((show) => (
            <WatchedCard key={show.data.mal_id} show={show} />
          ))}
        </ul>
      </div>

    </main>
    )
}
