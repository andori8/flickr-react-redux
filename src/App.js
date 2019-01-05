import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './containers/Search';
import RecentPhotos from './containers/RecentPhotos';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import ShowPhoto from './containers/ShowPhoto';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/recent" component={RecentPhotos} />
          <Route exact path="/recent/:id" component={ShowPhoto} />
        </div>
      </Router>
    );
  }
}

export default App;
