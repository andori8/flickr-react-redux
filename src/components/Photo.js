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
    return (
      <div className="single-photo">
        {this.proceedRedirect(this.props.photo.id)}
        <img src = {this.props.photo.url_m} onClick={this.handleClick} />
      </div>
    )
  }
}

export default Photo;
