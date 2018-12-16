import React from "react";

import { Navbar, NavItem } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = props => {
  return props.exLoggedIn === true || props.piLoggedIn === true ? (
    <Navbar className="teal darken-3" brand="Check Ride" right>
      <NavItem href="/" onClick={() => window.scrollBy(0, 500)}>
        About
      </NavItem>
      <NavItem href="/" onClick={props.logout}>
        Logout
      </NavItem>
    </Navbar>
  ) : (
    <Navbar className="teal darken-3" brand="Check Ride" right>
      <NavItem href="/" onClick={() => window.scrollBy(0, 500)}>
        About
      </NavItem>
      <NavItem href="/" onClick={() => window.scrollBy(0, 800)}>
        Login
      </NavItem>
    </Navbar>
  );
};

export default Navigation;
