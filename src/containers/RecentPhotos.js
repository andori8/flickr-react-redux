import React, { Component } from 'react';
import Photos from '../components/Photos';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/fetchPhotos';

class RecentPhotos extends Component {

  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const {recentPhotos} = this.props
    return (
      <div><Photos photos={recentPhotos} /></div>
    )
  }
}

export default connect(state => ({recentPhotos: state.recentPhotos.recentPhotos}), {fetchPhotos})(RecentPhotos);
