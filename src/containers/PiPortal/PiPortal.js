import React, { Component } from "react";

import { Button } from "react-materialize";

import Navigation from "../../components/Navbar/Navbar"
import Foot from "../../components/Footer/Footer"

class PiPortal extends Component {

  state = {

  };

  render () {
    return (
      <div className="container">
        <Navigation />
          Pilot Portal
        <Foot />
      </div>
    );

  };

};

export default PiPortal;
