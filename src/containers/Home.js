import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Welcome from '../components/Welcome';
import { connect } from 'react-redux';
import {fetchSearchedPhotos} from '../actions/fetchPhotos';

class Home extends Component {
  render() {
    return (
      <div className="home" >
        <Welcome fetchPhotos={this.props.fetchSearchedPhotos}/>
      </div>
    )
  }
}

export default connect(null, {fetchSearchedPhotos})(Home);
