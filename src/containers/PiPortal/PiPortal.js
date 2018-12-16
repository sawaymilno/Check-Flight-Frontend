import React, { Component } from "react";

import Navigation from "../../components/Navbar/Navbar";
import Foot from "../../components/Footer/Footer";
import PiProfile from "../../components/Profile/PiProfile";
import PilotSearchForm from "../../components/Profile/PilotSearchForm";

class PiPortal extends Component {
  state = {
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
        <PiProfile
          users={this.state.users}
          editToggle={this.editToggle}
          isDisabled={this.state.isDisabled}
          logout={this.props.logout}
        />
        <Foot />
      </>
    );
  }
}

export default PiPortal;
