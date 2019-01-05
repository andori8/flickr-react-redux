import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
        <button id="search" onClick={this.handleClick}>Search</button>
        <button id="recent" onClick={this.handleClick}>Most Recent</button>
      </div>
    )
  }
}

export default Home;
