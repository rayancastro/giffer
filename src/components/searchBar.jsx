/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input onChange={this.props.handleChange} className="form-search" />
    );
  }
}

export default SearchBar;
