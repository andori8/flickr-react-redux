import React, { Component } from 'react';
import Photos from '../components/Photos';
import Loading from 'react-loading-animation';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/fetchPhotos';

class RecentPhotos extends Component {

  componentDidMount() {
    this.props.fetchPhotos()
  }

  render() {
    const {recentPhotos} = this.props
    if (this.props.loading === false) {
    return (
      <div><Photos photos={recentPhotos} /></div>
    )} else {
      return <div><Loading /></div>
    }
  }
}

export default connect(state => ({recentPhotos: state.recentPhotos.recentPhotos, loading: state.recentPhotos.loading}), {fetchPhotos})(RecentPhotos);
