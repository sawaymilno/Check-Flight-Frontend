import React, { Component } from "react";

//import { Button } from "react-materialize";

import Navigation from "../../components/Navbar/Navbar"
import ExProfile from "../../components/Profile/ExProfile"
import Foot from "../../components/Footer/Footer"

class ExPortal extends Component {

  state = {
    isDisabled: true,

  };



  onChange = date => this.setState({ date })

  editToggle = () => {
    let isDisabled
    console.log(isDisabled);
    this.state.isDisabled ? (isDisabled = false) : (isDisabled = true)
    console.log(isDisabled);
    this.setState({
      isDisabled: isDisabled,
    });
  };

  render () {
    return (
      <div className="container">
        <Navigation />
        <ExProfile
          onChange={this.onChange} editToggle={this.editToggle} isDisabled={this.state.isDisabled}
          date={this.state.date}
         />
        <Foot />
      </div>
    );

  };

};

export default ExPortal;
