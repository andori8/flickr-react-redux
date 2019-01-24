import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Photo extends Component {
  state = {
    redirect: false
  }

  handleClick = () => {
    this.setState({
      redirect: true
    })
  }

  proceedRedirect = id => {
    if (this.state.redirect) {
      return <Redirect to={`/recent/${id}`} />
    }
  }

  render() {
    const {photo} = this.props
    return (
      <div className="single-photo">
        {this.proceedRedirect(photo.photo_id)}
        <img src = {photo.url} alt="" onClick={this.handleClick} />
      </div>
    )
  }
}

export default Photo;
