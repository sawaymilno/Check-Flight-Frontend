import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PilotProfile from "../../components/Profile/PilotProfile";

class PiPortal extends Component {
  state = {
    // airports: [],
    users: [],
    isDisabled: true
  };

  editToggle = () => {
    let isDisabled;
    this.state.isDisabled ? (isDisabled = false) : (isDisabled = true);
    console.log(isDisabled);
    this.setState({
      isDisabled: isDisabled
    });
  };

  render() {
    return (
      <>
        <Navigation />
        <PilotProfile
          users={this.state.users}
          editToggle={this.editToggle}
          isDisabled={this.state.isDisabled}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
