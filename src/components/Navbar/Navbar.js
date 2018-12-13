import React from "react";
// import { NavLink } from "react-router-dom";
import { Row, Navbar, NavItem } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = () => (
  <div>
    <Navbar className="teal darken-3" brand="Check Flight" right>
      <NavItem href="/About">About</NavItem>
      <NavItem href="/Login">Login</NavItem>
    </Navbar>
  </div>
);

export default Navigation;
