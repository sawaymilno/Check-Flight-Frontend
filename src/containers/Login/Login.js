import React, { Component } from "react";
import { Row } from "react-materialize";

// import { Link } from "react-router-dom";

import Pilot from "./Pilot";
import Examiner from "./Examiner";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    isPilot: true,
    isExaminer: true
  };
  /**************************************************************************
   * click handler on pilot button to render pilot registration form *
   **************************************************************************/
  showPilotFormHandler = e => {
    e.preventDefault();
    let value;
    this.state.isPilot ? (value = false) : (value = true);
    this.setState({
      isPilot: value
    });
  };
  /**************************************************************************
   * click handler on examiner button to render examiner registration form *
   **************************************************************************/
  showExaminerFormHandler = e => {
    e.preventDefault();
    let value;
    this.state.isExaminer ? (value = false) : (value = true);
    this.setState({
      isExaminer: value
    });
  };

  render() {
    return (
      <Row>
        <div className="col s12 m6 center">
          {!this.state.isPilot ? (
            <Pilot clicked={this.showPilotFormHandler} />
          ) : (
            <LoginForm user="Pilot" clicked={this.showPilotFormHandler} />
          )}
        </div>

        <div className="col s12 m6 center">
          {!this.state.isExaminer ? (
            <Examiner clicked={this.showExaminerFormHandler} />
          ) : (
            <LoginForm user="Examiner" clicked={this.showExaminerFormHandler} />
          )}
        </div>
      </Row>
    );
  }
}

export default Login;
