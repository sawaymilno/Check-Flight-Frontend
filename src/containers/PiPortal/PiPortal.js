import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    airports: [],
    isChecked: false,
    checkedAirports: []
  };

  /********************************************
   **** Fetch Airport Data ********************
   ********************************************/

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/airports", {
      credentials: "include"
    });
    const json = await response.json();
    this.setState({ airports: json });
  }

  airportCheckboxHandler = e => {
    console.log(e.target);
    this.setState({
      ...this.state,
      isChecked: true,
      checkedAirports: e.target.value
    })
  };

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
        <PilotProfile
          searched={this.onSearchSubmit}
          airports={this.state.airports}
          checked={this.airportCheckboxHandler}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
