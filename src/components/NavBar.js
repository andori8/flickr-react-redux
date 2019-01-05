import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="navbar">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a id="logo" href="/">Flickstr</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/recent">Most Recent</NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavBar;
