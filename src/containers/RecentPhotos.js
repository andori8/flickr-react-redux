import React, { Component } from 'react';
import Photos from '../components/Photos';

class RecentPhotos extends Component {
  state = {
    recentPhotos: []
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&extras=url_m`)
    .then(res => res.json())
    .then(json => {this.setState({recentPhotos: json.photos.photo.map(photo => photo)})})
  }

  render() {
    return (
      <div><Photos photos={this.state.recentPhotos} /></div>
    )
  }
}

export default RecentPhotos;
