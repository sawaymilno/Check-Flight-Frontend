import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    airports: [],
    isChecked: false,
    editing: false
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

  /**************************************************
   *****  Check Boxes Click Handler *******************
   **************************************************/

  airportCheckboxHandler = e => {
    console.log(e.target.checked);
    !this.state.isChecked
      ? this.setState({
          isChecked: true
        })
      : this.setState({
          isChecked: false
        });
  };

  /********************************************
   **** Search Button Submit Handler **********
   ********************************************/
  onSearchSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  /*********************************************
   **** Profile Edit Button Click Handler ******
   *********************************************/

  onEditClick = e => {
    e.preventDefault();
    console.log(e.target);
    !this.state.isEditing
      ? this.setState({
          isEditing: true
        })
      : this.setState({
          isEditing: false
        });
  };

  render() {
    return (
      <>
        <Navigation />
        <PilotProfile
          searched={this.onSearchSubmit}
          airports={this.state.airports}
          checked={this.airportCheckboxHandler}
          isChecked={this.state.isChecked}
          isEditing={this.onEditClick}
          isEditingState={this.state.isEditing}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
