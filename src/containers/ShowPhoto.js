import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import { connect } from 'react-redux';
import { fetchClickedPhoto } from '../actions/fetchPhotos';

class ShowPhoto extends Component {
  componentDidMount() {
    this.props.fetchClickedPhoto(this.props.match.params.id)
  }

  render() {
    const {clickedPhoto} = this.props
    if (Object.keys(clickedPhoto).length !== 0) {
      const source_url = `https://farm${clickedPhoto.farm}.staticflickr.com/${clickedPhoto.server}/${clickedPhoto.id}_${clickedPhoto.secret}.jpg`
    return (
      <div>
      <img src= {source_url} alt="" />
      <h4>"{clickedPhoto.title._content}"</h4>
      <p><a href={clickedPhoto.urls.url[0]._content}>Go to Flickr page</a></p>
      </div>
    ) } else {
      return <div><Loading /></div>
    }
  }
}

export default connect(state => ({clickedPhoto: state.clickedPhoto.clickedPhoto}), {fetchClickedPhoto})(ShowPhoto);
