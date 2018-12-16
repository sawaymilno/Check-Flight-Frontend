import React from "react";

import { Navbar, NavItem } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = () => (
  <div>
    <Navbar className="teal darken-3" brand="Check Ride" right>
      <NavItem href="/About">About</NavItem>
      <NavItem href="/" onClick={() => window.scrollBy(0, 800)}>
        Login
      </NavItem>
    </Navbar>
  </div>
);

export default Navigation;
