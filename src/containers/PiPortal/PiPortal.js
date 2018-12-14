import React, { Component } from "react";


import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {};

  /********************************************
   **** Search Button Submit Handler **********
   ********************************************/
  onSearchSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    return (
      <>
        <Navigation />
        <PilotProfile searched={this.onSearchSubmit} />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
