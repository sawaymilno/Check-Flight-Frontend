import React, { Component } from "react";

import { Button, Card, Row, Input, Icon, CardTitle } from "react-materialize";

class Login extends Component {
  state = {};

  render() {
    return (
      <Row>
        <Card header="Signup">
          
          <Input s={6} label="First Name" validate />
          <Input s={6} label="Last Name" validate />
          <Input s={12} label="Telephone" validate type="tel">
            <Icon>phone</Icon>
          </Input>
          <Input type="email" label="Email" s={12}>
            <Icon>email</Icon>
          </Input>
          <Input s={12} label="Username">
            <Icon>account_circle</Icon>
          </Input>
          <Input s={6} label="Password" type="password">
            <Icon>lock</Icon>
          </Input>
          <Input s={6} label="Confirm Password" type="password" />
          <Button style={{ width: "100%" }} waves="light">
            Submit
          </Button>
        </Card>
      </Row>
    );
  }
}

export default Login;
