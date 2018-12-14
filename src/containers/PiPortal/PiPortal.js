import React, { Component } from "react";


import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    airports: []
  };





  /********************************************
   **** Fetch Airport Data ********************
   ********************************************/

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/airports', {credentials: 'include'})
    const json = await response.json()
    this.setState({ airports: json })
  }


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
        <PilotProfile searched={this.onSearchSubmit} airports={this.state.airports} />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
