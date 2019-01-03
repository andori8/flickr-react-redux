import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Photos from '../components/Photos';
import { connect } from 'react-redux';
import {fetchSearchedPhotos} from '../actions/fetchPhotos';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar fetchPhoto={this.props.fetchSearchedPhotos} />
        <Photos photos={this.props.photos} />
      </div>
    )
  }
}

export default connect(state => ({photos: state.photos}), {fetchSearchedPhotos})(Search);
