import React, { useState } from 'react';
import axios from 'axios';
import dummy from '../../dist/assets/dummydata'
import ToWatchCard from './toWatch'
const jikanjs = require('@mateoaranda/jikanjs');

// Huzzah for jsx!
export default function Home() {
  const [watched, setWatched] = useState([dummy]);
  const [toWatch, setToWatch] = useState([dummy]);
  const [searched, setSearced] = useState([])
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
    setWatched((s) => s.concat(e.target.value));
  }

   return (
     <>
     <h1>What to Watch</h1>
      <div>Search placeholder</div>
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
          <li>watched shows</li>
        </ul>
      </div>
    </>
    )
}
