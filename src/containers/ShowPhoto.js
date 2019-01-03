import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClickedPhoto } from '../actions/fetchPhotos';

class ShowPhoto extends Component {
  componentDidMount() {
    this.props.fetchClickedPhoto(this.props.match.params.id)
  }

  render() {
    return (
      <div><img src={this.props.clickedPhoto} /></div>
    )
  }
}

export default connect(state => ({clickedPhoto: state.clickedPhoto}), {fetchClickedPhoto})(ShowPhoto);
