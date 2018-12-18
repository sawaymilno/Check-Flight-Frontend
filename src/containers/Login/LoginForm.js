import React from "react";
import { Button, Card, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const LoginForm = ({ userType, clicked, login }) => (
  <Card>
    <h4 style={{ textAlign: "center" }}>
      {" "}
      <Icon large>account_circle</Icon>
      <br />
      {userType} Login
    </h4>
    <form onSubmit={e => {
        e.preventDefault()

        let user = {
          email: e.target.email.value,
          password: e.target.password.value
        }

        login(userType, user)
    }} id={userType} style={{ textAlign: "left" }}>
      <Input s={12} label="Email" name="email" validate required>
        <Icon>account_circle</Icon>
      </Input>
      <Input s={12} label="Password" type="password" name="password" validate required>
        <Icon>lock</Icon>
      </Input>

      <Button
        className="green accent-3"
        type="submit"
        style={{ width: "100%" }}
        waves="light"
        name={userType}
      >
        {userType} Login
      </Button>
    </form>
    <br />
    <br />
    <Link onClick={clicked} to="/Register">
      Need to sign up? Click here
    </Link>
  </Card>
);

export default LoginForm;
