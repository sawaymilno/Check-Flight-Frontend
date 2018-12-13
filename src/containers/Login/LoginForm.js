import React from "react";
import { Button, Card, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const LoginForm = props => (
  <div>
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

      <Button
        className="green accent-3"
        type="submit"
        style={{ width: "100%" }}
        waves="light"
      >
        LOGIN
      </Button>
      <br />
      <br />
      <Link onClick={props.clicked} to="/Register">
        Need to sign up? Click here
      </Link>
    </Card>
  </div>
);

export default LoginForm;
