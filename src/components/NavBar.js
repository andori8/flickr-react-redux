import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="navbar">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a id="logo" href="/">Flickstr</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav pullRight>
        <NavItem className="menu-item" href="/search">Search</NavItem>
        <NavItem className="menu-item" href="/recent">Recent Uploads</NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar;
