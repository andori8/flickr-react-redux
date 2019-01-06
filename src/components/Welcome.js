import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Welcome extends Component {
  state = {
    redirect: false,
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    this.setState({redirect: true})
    this.props.fetchPhotos(this.state.text)
    this.setState({text: ''})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/search'} />
    }
  }

  render() {
    return (
      <div>
        <h1 id="welcome_message">Welcome to Flickstr!</h1><br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="search-field" onChange={this.handleChange} value={this.state.text} placeholder="Search a photo!" /><br /><br />
          <input type="submit" className="submit-button" value="Search" />
        </form>
        {this.renderRedirect()}
      </div>
  )
  }
}

export default Welcome;
