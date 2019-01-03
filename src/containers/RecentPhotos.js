import React, { Component } from 'react';
import Photos from '../components/Photos';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/fetchPhotos';

class RecentPhotos extends Component {

  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    return (
      <div><Photos photos={this.props.recentPhotos} /></div>
    )
  }
}

export default connect(state => ({recentPhotos: state.recentPhotos}), {fetchPhotos})(RecentPhotos);
