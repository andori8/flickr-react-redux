import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Welcome from './Welcome';
import { connect } from 'react-redux';
import {fetchSearchedPhotos} from '../actions/fetchPhotos';

class Home extends Component {
  state = {
    redirect: false,
    path: ""
  }

  handleClick = e => {
    this.setState({
      redirect: true,
      path: e.target.id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/${this.state.path}`} />
    }
  }
  render() {
    return (
      <div className="home" >
        {this.renderRedirect()}
        <Welcome fetchPhotos={this.props.fetchSearchedPhotos}/>
      </div>
    )
  }
}

export default connect(null, {fetchSearchedPhotos})(Home);
