import React, { Component } from "react";

import { Button, Row } from "react-materialize";
// import { Link } from "react-router-dom";

import Pilot from "./Pilot";
import Examiner from "./Examiner";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    isUser: true,
    isPilot: false,
    isExaminer: false
  };

  /**************************************************************************
   * event handler for link at bottom of sign up form to switch to login form *
   **************************************************************************/
  switchToLoginHandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      isUser: true
    });
  };

  /**************************************************************************
   * event handler for link at bottom of Login form to switch to sign up form *
   **************************************************************************/
  switchToSigninHandler = e => {
    e.preventDefault();
    this.setState({
      isUser: false,
      isPilot: false,
      isExaminer: false
    });
  };

  /**************************************************************************
   * click handler on pilot button to render pilot registration form *
   **************************************************************************/
  showPilotFormHandler = e => {
    e.preventDefault();
    this.setState({
      isPilot: true,
      isExaminer: false,
      isUser: false
    });
  };

  /**************************************************************************
   * click handler on examiner button to render examiner registration form *
   **************************************************************************/
  showExaminerFormHandler = e => {
    e.preventDefault();
    this.setState({
      isExaminer: true,
      isPilot: false,
      isUser: false
    });
  };

  render() {
    return !this.state.isUser ? (
      <Row>
        <Button
          large
          onClick={this.showPilotFormHandler}
          className="green accent-3"
          style={{ width: "100%" }}
        >
          REGISTER AS PILOT
        </Button>

        <br />
        <br />
        <Button
          large
          className="green accent-3"
          onClick={this.showExaminerFormHandler}
          style={{ width: "100%" }}
        >
          REGISTER AS EXAMINER
        </Button>
        {this.state.isPilot ? (
          <Pilot clicked={this.switchToLoginHandler} />
        ) : null}
        {this.state.isExaminer ? (
          <Examiner clicked={this.switchToLoginHandler} />
        ) : null}
        <br />
      </Row>
    ) : (
      <LoginForm clicked={this.switchToSigninHandler} />
    );
  }
}

export default Login;
