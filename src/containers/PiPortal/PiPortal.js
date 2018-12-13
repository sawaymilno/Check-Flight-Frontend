import React, { Component } from "react";


import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {};

  render() {
    return (
      <>
        <Navigation />
        <PilotProfile />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
