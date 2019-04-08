/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Gif from './gif';


class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        { this.props.gifs.slice(0, 10).map((gif) => {
          return <Gif handleClick={this.props.handleClick} id={gif.id}/>;
        })
        }
      </div>
    );
  }
}

export default GifList;
