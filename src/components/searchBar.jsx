/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {
  handleMouse = () => {
    console.log('yaaay');
  }
  render() {
    return (
      <input type="text" onMouseOver={this.handleMouse} onChange={this.props.handleChange} className="form-control form-search" />
    );
  }
}

export default SearchBar;
