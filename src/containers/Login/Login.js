import React, { Component } from "react";

import { Button, Card, Row, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    isUser: false
  };

  switchToLoginHandler = e => {
    e.preventDefault();
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

  render() {
    return !this.state.isUser ? (
      <Row>
        <Card>
          <h4 style={{ textAlign: "center" }}>
            {" "}
            <Icon large>account_circle</Icon>
            <br />
            SIGN UP
          </h4>

          <Input s={6} label="First Name" validate required />
          <Input s={6} label="Last Name" validate required />
          <Input s={12} label="Telephone" validate type="tel">
            <Icon>phone</Icon>
          </Input>
          <Input type="email" label="Email" s={12} validate required>
            <Icon>email</Icon>
          </Input>
          <Input s={12} label="Username" validate required>
            <Icon>account_circle</Icon>
          </Input>
          <Input s={6} label="Password" type="password" validate required>
            <Icon>lock</Icon>
          </Input>
          <Input
            s={6}
            label="Confirm Password"
            type="password"
            validate
            required
          />
          <Button type="submit" style={{ width: "100%" }} waves="light">
            CREATE ACCOUNT
          </Button>
          <br />
          <br />

          <Link onClick={this.switchToLoginHandler} to="/Login">
            Already have an account? Click to login
          </Link>
        </Card>
      </Row>
    ) : (
      <Row>
        <Card>
          <h4 style={{ textAlign: "center" }}>
            {" "}
            <Icon large>account_circle</Icon>
            <br />
            Login
          </h4>

          <Input s={12} label="Username" validate required>
            <Icon>account_circle</Icon>
          </Input>
          <Input s={12} label="Password" type="password" validate required>
            <Icon>lock</Icon>
          </Input>
          <Button type="submit" style={{ width: "100%" }} waves="light">
            LOGIN
          </Button>
          <br />
          <br />

          <Link onClick={this.switchToSigninHandler} to="/Register">
            Need to sign up? Click here
          </Link>
        </Card>
      </Row>
    );
  }
}

export default Login;
