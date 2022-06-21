import React from 'react'
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
    <h2>list</h2>
    )
  }
}


export default Home;