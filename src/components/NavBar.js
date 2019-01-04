import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color="transparent" light expand="md">
      <NavbarBrand href="/">Flickster</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/search">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/recent">Most Recent</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar;
