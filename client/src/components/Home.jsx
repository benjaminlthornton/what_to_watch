import React, { useState } from 'react';
import axios from 'axios';
import dummy from '../../dist/assets/dummydata'
import ToWatchCard from './ToWatch'
import WatchedCard from './Watched'
import Search from './Search'
const jikanjs = require('@mateoaranda/jikanjs');

// Huzzah for jsx!
export default function Home() {
  const [watched, setWatched] = useState([dummy]);
  const [toWatch, setToWatch] = useState([dummy]);
  const [searched, setSearched] = useState([])
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



   return (
     <>
     <h1>What to Watch</h1>
      <h2>Search placeholder</h2>
      <Search setSearched={setSearched}/>
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
    </>
    )
}
