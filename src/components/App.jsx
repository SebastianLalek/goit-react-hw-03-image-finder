import axios from 'axios';

import React, { Component } from 'react';
import Searchbar from './searchbar/Seachbar';
import ImageGallery from './imagegallery/ImageGallery';
import ImageGalleryItem from './imagegalerryitem/ImageGalleryItem';
import Loader from './loader/Loader';

class ImageFinder extends Component {
  state = {
    isLoading: false,
    query: '',
    pictures: [],
    currentPage: 1,
    error: '',
  };

  getImages = async () => {
    const URL = 'https://pixabay.com/api/';

    const params = {
      key: '39310150-ae6655c0c5d929a5c6e93be30',
      q: this.state.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.state.currentPage,
      per_page: 12,
    };

    try {
      this.setState({ isLoading: true });

      const result = await axios
        .get(URL, { params })
        .then(response => response.data);

      const photos = await result.hits;

      this.setState(state => ({
        pictures: [...state.pictures, ...photos],
      }));

      console.log(photos);
    } catch (error) {
      this.setState({ error: error.toString() });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;

    this.setState(
      {
        query: query,
        pictures: [],
        currentPage: 1,
      },
      () => this.getImages()
    );
  };

  render() {
    const { pictures, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery>
          {pictures.map(picture => (
            <ImageGalleryItem key={picture.id} image={picture} />
          ))}
        </ImageGallery>
      </>
    );
  }
}

export const App = () => {
  return (
    <div>
      <ImageFinder />
    </div>
  );
};
