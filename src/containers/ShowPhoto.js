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
    return (
      <div>
      <img src= {clickedPhoto.url} alt="" />
      <h4>"{clickedPhoto.title}"</h4>
      <p><a href={clickedPhoto.flickr_url}>Go to Flickr page</a></p>
      </div>
    ) } else {
      return <div><Loading /></div>
    }
  }
}

export default connect(state => ({clickedPhoto: state.clickedPhoto.clickedPhoto}), {fetchClickedPhoto})(ShowPhoto);
