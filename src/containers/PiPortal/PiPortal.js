import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    airports: [],
    users: [],
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
    this.setState({ ...this.state, airports: json });
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch("http://localhost:3001/users", {
      credentials: "include"
    });
    const json = await response.json();
    this.setState({
      ...this.state,
      users: json
    });
  };

  /********************************************
   **** Search Button Submit Handler **********
   ********************************************/

  onSearchSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      ...this.state,
      checkedAirports: e.target.name
    });
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
          isEditing={this.onEditClick}
          isEditingState={this.state.isEditing}
          users={this.state.users}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
