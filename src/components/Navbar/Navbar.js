import React from "react";
import { Link } from "react-router-dom";
import { Row, Navbar, NavItem, Icon } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = () => (
  <Row>
    <Navbar className="indigo darken-3" brand="Check Flight" right>
      <Link to="/login">
        <Icon large>account_circle</Icon>
      </Link>
    </Navbar>
  </Row>
);

export default Navigation;
