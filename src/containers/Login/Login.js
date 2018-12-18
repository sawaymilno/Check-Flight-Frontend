import React, { Component } from "react";
import { Row } from "react-materialize";

// import { Link } from "react-router-dom";

import Pilot from "./Pilot";
import Examiner from "./Examiner";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    pilotFormOpen: false,
    examinerFormOpen: false
  };

  /**************************************************************************
   * click handler on pilot button to render pilot registration form *
   **************************************************************************/
  showPilotFormHandler = e => {
    e.preventDefault();
    this.setState({
      pilotFormOpen: this.state.pilotFormOpen ? false : true
    });
  };

  /**************************************************************************
   * click handler on examiner button to render examiner registration form *
   **************************************************************************/
  showExaminerFormHandler = e => {
    e.preventDefault();
    this.setState({
      examinerFormOpen: this.state.examinerFormOpen ? false : true
    });
  };

  /**************************************************************************
   * submit handler on pilot signup button to post registration *
   **************************************************************************/
  pilotSignupHandler = async e => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      bio: "",
      rates: "",
      isExaminer: false
    };
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    let json = await response.json()
    let jwt = json.auth_token
    localStorage.setItem('jwt', jwt)
    let user_id = JSON.parse(atob(jwt.split('.')[1])).user_id
    await this.props.getUser(user_id)
  };

  /**************************************************************************
   * submit handler on examiner signup button to post registration *
   **************************************************************************/
  examinerSignupHandler = async e => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      bio: e.target.bio.value,
      rates: e.target.rates.value,
      isExaminer: true
    };

    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    let json = await response.json()
    let jwt = json.auth_token
    localStorage.setItem('jwt', jwt)
    let user_id = JSON.parse(atob(jwt.split('.')[1])).user_id
    await this.props.getUser(user_id)
  };

  render() {
    return (
      <Row>
        <div className="col s12 m6 center">
          {this.state.pilotFormOpen ? (
            <Pilot
              login={this.props.login}
              clicked={this.showPilotFormHandler}
              signup={this.pilotSignupHandler}
            />
          ) : (
            <LoginForm
              userType="Pilot"
              login={this.props.login}
              clicked={this.showPilotFormHandler}
            />
          )}
        </div>

        <div className="col s12 m6 center">
          {this.state.examinerFormOpen ? (
            <Examiner
              login={this.props.login}
              clicked={this.showExaminerFormHandler}
              signup={this.examinerSignupHandler}
            />
          ) : (
            <LoginForm
              userType="Examiner"
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
