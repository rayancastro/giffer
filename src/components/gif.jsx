/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  gifClick = () => {
    if (this.props.handleClick) {
      return this.props.handleClick;
    }
  }

  render() {
    return (
      <img onClick={this.props.handleClick} src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} alt="" className="gif" id={this.props.id}/>
    );
  }
}

export default Gif;
