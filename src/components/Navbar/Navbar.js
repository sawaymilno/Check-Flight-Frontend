import React from "react";
import { Link } from "react-router-dom";
import { Row, Navbar, NavItem, Icon } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = () => (
  <Row>
    <Navbar className="teal darken-3" brand="Check Flight" right>
      <NavItem href="/About">About</NavItem>
      <NavItem href="/Login">Login</NavItem>
    </Navbar>
  </Row>
);

export default Navigation;
