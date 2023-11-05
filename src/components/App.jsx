import { Component } from 'react';
import Searchbar from './searchbar/seachbar';

class ImageFinder extends Component {
  render() {
    return <Searchbar />;
  }
}

export const App = () => {
  return (
    <div>
      <ImageFinder />
    </div>
  );
};
