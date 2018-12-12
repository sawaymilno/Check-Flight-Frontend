import React, { Component } from "react";


import {Button, Card, Row, Input, Icon} from 'react-materialize'

 class Login extends Component {
  state = {};

  render() {
    return <Row>
        <Input placeholder="First Name" s={6} label="First Name" />
        <Input s={6} placeholder="Last Name" label="Last Name" />
        <Input type="email" label="Email" s={12} />
        <Input type="password" label="password" s={12} />
      </Row>;
  }
}

export default Login