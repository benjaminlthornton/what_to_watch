import React from 'react';
import axios from 'axios';

// Huzzah for jsx!
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: [],
      toWatch: [],
      user: '',
    }
  }

  retrieveWatched(user) {
    axios({
      method: 'GET',
      url: '/watched',
      data: {
        user
      }
    })
    .then((res) => {
      this.setState({watched: [...res.data]});
    })
    .catch((err) => {
      console.log('Error, retrieveWatched:', err);
    });
  }

  retrieveToWatch(user) {
    axios({
      method: 'GET',
      url: '/watched',
      data: {
        user
      }
    })
    .then((res) => {
      this.setState({toWatch: [...res.data]});
    })
    .catch((err) => {
      console.log('Error, retrieveToWatch:', err);
    });
  }



  render() {
   return (
     <>
     <h1>What to Watch</h1>
      <div>Search placeholder</div>
      <h2>To Watch</h2>
      <div className="toWatch">
        <ul className="userShowList">
          <li>to watchshows</li>
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
}


export default Home;