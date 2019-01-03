import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Photos from '../components/Photos';

class Search extends Component {
  state = {
    photos: []
  }

  fetchPhoto = q => {
    fetch(`http://localhost:3001/api/v1/search`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({query: q})
    })
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
