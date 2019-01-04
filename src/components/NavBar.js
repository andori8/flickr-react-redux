import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = () => {
  return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Flickstr</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recent">Most Recent</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  )
}

export default NavBar;
