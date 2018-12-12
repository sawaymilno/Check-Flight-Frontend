import React, { Component } from "react";

import { Button, Card, Row, Input, Icon } from "react-materialize";

class Login extends Component {
  state = {};

  render() {
    return (
      <Row>
        <Input s={6} label="First Name" validate />
        <Input s={6} placeholder="Last Name" />
        <Input s={12} label="Telephone" validate type="tel">
          <Icon>phone</Icon>
        </Input>
        <Input type="email" label="Email" s={12}>
          <Icon>email</Icon>
        </Input>
        <Input s={12} placeholder="Username">
          <Icon>account_circle</Icon>
        </Input>
        <Input placeholder="Password" type="password">
          <Icon>lock</Icon>
        </Input>
        <Input placeholder="Confirm Password" type="password" />
        <Button style={{ width: "100%" }} waves="light">
          Submit
        </Button>
      </Row>
    );
  }
}

export default Login;
