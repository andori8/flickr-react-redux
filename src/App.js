import React, { Component } from 'react';
import SearchComponent from './components/SearchComponent';
import PhotosContainer from './containers/PhotosContainer';
import './App.css';

class App extends Component {
  state = {
    photos: []
  }

  fetchPhoto = q => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${q}&format=json&nojsoncallback=1&extras=url_m`)
    .then(res => res.json())
    .then(json => {this.setState({photos: json.photos.photo.map(photo => photo)})})
  }

  render() {
    return (
      <div className="App">
      <SearchComponent fetchPhoto={this.fetchPhoto} />
      <PhotosContainer photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
