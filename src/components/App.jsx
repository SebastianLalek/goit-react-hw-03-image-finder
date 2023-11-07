import axios from 'axios';

import React, { Component } from 'react';
import Searchbar from './searchbar/Seachbar';

class ImageFinder extends Component {
  state = {
    query: '',
    page: 1,
    error: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;

    this.setState({
      query: query,
    });
  };

  render() {
    return <Searchbar onSubmit={this.handleSubmit} />;
  }
}

export const App = () => {
  return (
    <div>
      <ImageFinder />
    </div>
  );
};
