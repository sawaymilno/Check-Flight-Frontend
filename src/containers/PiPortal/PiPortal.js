import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    airports: [],
    isChecked: false,
    // checkedAirports: new Set()
  };

  // addItem(item) {
  //   this.setState(({ checkedAirports }) => ({
  //     checkedAirports: new Set(checkedAirports.add(item))
  //   }));
  // }

  // removeItem(item) {
  //   this.setState(({ checkedAirports }) => {
  //     const newChecked = new Set(checkedAirports);
  //     newChecked.delete(item);

  //     return {
  //       checkedAirports: newChecked
  //     };
  //   });
  // }

  // getItemCheckedStatus(item) {
  //   return this.state.checkedAirports.has(item);
  // }

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
    console.log(e.target)
    
    }
  

  /********************************************
   **** Search Button Submit Handler **********
   ********************************************/
  onSearchSubmit = e => {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <>
        <Navigation />
        <PilotProfile
          searched={this.onSearchSubmit}
          airports={this.state.airports}
          checked={this.airportCheckboxHandler}
          isChecked={this.state.isChecked}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
