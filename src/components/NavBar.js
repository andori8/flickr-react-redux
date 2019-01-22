import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
  return (
    <div className="navbar">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" id="logo">Flickstr</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav pullRight>
        <NavItem><Link to="/search" className="menu-item">Search</Link></NavItem>
        <NavItem><Link to="/recent" className="menu-item">Recent Uploads</Link></NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
  }
}

export default NavBar;
