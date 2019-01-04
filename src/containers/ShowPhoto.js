import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClickedPhoto } from '../actions/fetchPhotos';

class ShowPhoto extends Component {
  componentDidMount() {
    this.props.fetchClickedPhoto(this.props.match.params.id)
  }

  render() {
    if (Object.keys(this.props.clickedPhoto).length !== 0) {
      console.log(this.props.clickedPhoto)
    return (
      <div>
      <img src={this.props.clickedPhoto.urls.url[0]._content} />
      </div>
    ) } else {
      return <div>loading</div>
    }
  }
}

export default connect(state => ({clickedPhoto: state.clickedPhoto}), {fetchClickedPhoto})(ShowPhoto);
