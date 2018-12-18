import React from "react";

import { Navbar, NavItem } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = ({ logout, currentUser }) => {
  return currentUser ? (
    <Navbar
      className="teal darken-3"
      brand="Check Ride"
      onClick={e => {
        e.preventDefault();
      }}
      right
    >
      {/* <NavItem href="/" onClick={() => window.scrollBy(0, 500)}>
        About
      </NavItem> */}
      <NavItem href="/" onClick={logout}>
        Logout
      </NavItem>
    </Navbar>
  ) : (
    <Navbar
      className="teal darken-3"
      brand="Check Ride"
      onClick={e => {
        e.preventDefault();
      }}
      right
    >
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
