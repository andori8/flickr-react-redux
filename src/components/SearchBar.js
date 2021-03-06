import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchPhoto(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="search-field" onChange={this.handleChange} value={this.state.text} placeholder="Search for flickr photos!" /><br /><br />
          <input type="submit" className="submit-button" value="Search" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
