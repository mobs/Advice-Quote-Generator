import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: ''
  }

  componentDidMount() {
    // console.log('component did mount');
    this.fetchAdvice();
  }

  // fetching data from api
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log('error: ',error);
      });
  }
  render() {
    const { advice } = this.state;
 
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'> {advice} </h1>
        </div>
      </div>
    );
  }
}

export default App;
