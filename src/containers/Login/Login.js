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

  /**************************************************************************
   * submit handler on pilot signup button to post registration *
   **************************************************************************/
  pilotSignupHandler = e => {
    e.preventDefault();
    console.log(e.target.id);
    const user = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      bio: "",
      rates: "",
      isExaminer: false
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    this.props.login(e);
  };

  /**************************************************************************
   * submit handler on examiner signup button to post registration *
   **************************************************************************/
  examinerSignupHandler = e => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      bio: e.target.bio.value,
      rates: e.target.rates.value,
      isExaminer: true
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    this.props.login(e);
  };

  render() {
    return (
      <Row>
        <div className="col s12 m6 center">
          {!this.state.isPilot ? (
            <Pilot
              login={this.login}
              clicked={this.showPilotFormHandler}
              signup={this.pilotSignupHandler}
            />
          ) : (
            <LoginForm
              user="Pilot"
              login={this.login}
              clicked={this.showPilotFormHandler}
            />
          )}
        </div>

        <div className="col s12 m6 center">
          {!this.state.isExaminer ? (
            <Examiner
              login={this.props.login}
              clicked={this.showExaminerFormHandler}
              signup={this.examinerSignupHandler}
            />
          ) : (
            <LoginForm
              user="Examiner"
              login={this.props.login}
              clicked={this.showExaminerFormHandler}
            />
          )}
        </div>
      </Row>
    );
  }
}

export default Login;
