import React, { Component } from 'react';
import Photos from '../components/Photos';

class RecentPhotos extends Component {
  state = {
    recentPhotos: []
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/recent`)
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
