import React from "react";
import { Button, Card, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const Pilot = props => {
  return (
    <Card>
      <h4 style={{ textAlign: "center" }}>
        {" "}
        <Icon large>account_circle</Icon>
        <br />
        Pilot Sign Up
      </h4>
      <div style={{ color: "red" }}>
      { props.error && props.error.userType === 'Pilot' ? props.error.message : '' }
      </div>
      <form id="Pilot" onSubmit={props.signup}>
        <div style={{ textAlign: "left" }}>
          <Input s={12} label="First Name" name="firstName" validate required />
          <Input s={12} label="Last Name" name="lastName" validate required />
          <Input s={12} label="Telephone" name="phone" validate type="tel">
            <Icon>phone</Icon>
          </Input>
          <Input
            type="email"
            name="email"
            label="Email"
            s={12}
            validate
            required
          >
            <Icon>email</Icon>
          </Input>
          <Input
            s={12}
            label="Password"
            type="password"
            name="password"
            validate
            required
          >
            <Icon>lock</Icon>
          </Input>
          <Input
            s={12}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            validate
            required
          >
            <Icon>lock</Icon>
          </Input>
        </div>
        <Button
          className="green accent-3"
          type="submit"
          style={{ width: "100%" }}
          waves="light"
          name="Pilot"
          user="Pilot"
          // onClick={props.login}
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
};

export default Pilot;
