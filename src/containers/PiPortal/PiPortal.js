import React, { Component } from "react";

import PiProfile from "../../components/Profile/PiProfile";

class PiPortal extends Component {
  state = {
    isDisabled: true
  };

  editToggle = () => {
    this.setState({
      isDisabled: this.state.isDisabled ? false : true
    });
  };
  render() {
    return (
      <>
        <PiProfile
          currentUser={this.props.currentUser}
          editToggle={this.editToggle}
          isDisabled={this.state.isDisabled}
          logout={this.props.logout}
          airports={this.props.airports}
        />
      </>
    );
  }
}

export default PiPortal;
