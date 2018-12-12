import React, { Component } from "react";

import { Button, Card, Row, Input, Icon, Col } from "react-materialize";
import { Link } from "react-router-dom";

import Pilot from "./Pilot";
import Examiner from "./Examiner";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    isUser: true,
    isPilot: false
  };

  switchToLoginHandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      isUser: true
    });
  };

  switchToSigninHandler = e => {
    e.preventDefault();
    this.setState({
      isUser: false
    });
  };

  //Click handler to render pilot sign up form
  showPilotFormHandler = e => {
    e.preventDefault();
    this.setState({
      isPilot: true,
      isExaminer: false,
      isUser: false
    });
  };

  //Click handler to render Examiner sign up form
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
        <Button onClick={this.showPilotFormHandler} style={{ width: "100%" }}>
          REGISTER AS PILOT
        </Button>
        {this.state.isPilot ? (
          <Pilot clicked={this.switchToLoginHandler} />
        ) : null}
        <br />
        <br />
        <Button
          onClick={this.showExaminerFormHandler}
          style={{ width: "100%" }}
        >
          REGISTER AS EXAMINER
        </Button>
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
