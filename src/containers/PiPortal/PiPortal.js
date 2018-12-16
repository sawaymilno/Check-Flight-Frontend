import React, { Component } from "react";

import PiProfile from "../../components/Profile/PiProfile";

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
        <PiProfile
          users={this.state.users}
          editToggle={this.editToggle}
          isDisabled={this.state.isDisabled}
          logout={this.props.logout}
        />
      </>
    );
  }
}

export default PiPortal;
