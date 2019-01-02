import React, { Component } from 'react';

class SearchComponent extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <div className="search-field">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} placeholder="Search for flickr photos!" />
          <input type="submit" id="submit-button" value="Search" />
        </form>
      </div>
    )
  }
}

export default SearchComponent;
