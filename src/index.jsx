/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Giphy from 'giphy.js';

import '../assets/stylesheets/application.scss';

import SearchBar from './components/searchBar';
import GifList from './components/gifList';
import Gif from './components/gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "KsPC9t0ToZhqU"
    };

    
  }

  handleChange = (event) => {
    new Giphy('sDcTIiqmQ3R5xW5S1F1cpLiTHZeXi5Bj').search({
      q: event.target.value
    }).then((response) => {
      this.setState({
        gifs: response.data 
      });
    }).catch(error => console.log(error))
  }

  handleClick = (event) => {
    this.setState({
      selectedGif: event.target.id
    })
  }

  render() {
    const { gifs, selectedGif } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar handleChange={this.handleChange} />
          <div className="selected-gif">
            <Gif id={selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList handleClick={this.handleClick} gifs={gifs}/>

        </div>
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
