import React from "react";
import { Button, Card, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const Examiner = props => (
  <Card>
    <h4 style={{ textAlign: "center" }}>
      {" "}
      <Icon large>account_circle</Icon>
      <br />
      Examiner Sign Up
    </h4>
    <div>
    { props.error && props.error.userType === 'Examiner' ? props.error.message : '' }
    </div>
    <form id="Examiner" onSubmit={props.signup}>
      <div style={{ textAlign: "left" }}>
        <Input s={12} name="firstName" label="First Name" validate required />
        <Input s={12} name="lastName" label="Last Name" validate required />
        <Input s={12} name="phone" label="Telephone" validate type="tel">
          <Icon>phone</Icon>
        </Input>
        <Input type="email" label="Email" s={12} name="email" validate required>
          <Icon>email</Icon>
        </Input>
        <Input
          s={12}
          name="password"
          label="Password"
          type="password"
          validate
          required
        >
          <Icon>lock</Icon>
        </Input>
        <Input
          s={12}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          validate
          required
        >
          <Icon>lock</Icon>
        </Input>{" "}
        <Input s={12} name="rates" type="text" label="Rate">
          <Icon>monetization_on</Icon>
        </Input>
        <Input
          s={12}
          type="textarea"
          name="bio"
          label="Bio: Tell us about yourself"
          validate
          required
        >
          <Icon>mode_edit</Icon>
        </Input>
      </div>
      <Button
        className="green accent-3"
        type="submit"
        style={{ width: "100%" }}
        waves="light"
        user="Examiner"
        name="Examiner"
      >
        Create Account
      </Button>
    </form>
    <br />
    <br />
    <Link onClick={props.clicked} to="/">
      Already have an account? Click to login
    </Link>
  </Card>
);

export default Examiner;
