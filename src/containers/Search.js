import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Photos from '../components/Photos';

class Search extends Component {
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
      <div>
        <SearchBar fetchPhoto={this.fetchPhoto} />
        <Photos photos={this.state.photos} />
      </div>
    )
  }
}

export default Search;
