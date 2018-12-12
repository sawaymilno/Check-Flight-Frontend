import React from "react";
import { Link } from "react-router-dom";
import { Row, Navbar, NavItem, Icon } from "react-materialize";

import "./Navbar.css";
import "../../containers/App/App.css";

const Navigation = () => (
  <Row>
    <Navbar className="indigo darken-3" brand="Check Flight" right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
    </Navbar>
  </Row>
);

export default Navigation;
