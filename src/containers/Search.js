import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Photos from '../components/Photos';
import Loading from 'react-loading-animation';
import { connect } from 'react-redux';
import {fetchSearchedPhotos} from '../actions/fetchPhotos';

class Search extends Component {

  render() {
    if (this.props.loading === false) {
    return (
      <div>
        <SearchBar fetchPhoto={this.props.fetchSearchedPhotos} />
        <Photos photos={this.props.photos} />
      </div>
    )} else {
      return <div><Loading /></div>
    }
  }
}

export default connect(state => ({photos: state.photos.photos, loading: state.photos.loading}), {fetchSearchedPhotos})(Search);
