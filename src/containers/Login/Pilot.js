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
        PILOT SIGN UP
      </h4>
      <div style={{ textAlign: "left" }}>
        <Input s={12} label="First Name" validate required />
        <Input s={12} label="Last Name" validate required />
        <Input s={12} label="Telephone" validate type="tel">
          <Icon>phone</Icon>
        </Input>
        <Input type="email" label="Email" s={12} validate required>
          <Icon>email</Icon>
        </Input>
        <Input s={12} label="Username" validate required>
          <Icon>account_circle</Icon>
        </Input>
        <Input s={12} label="Password" type="password" validate required>
          <Icon>lock</Icon>
        </Input>
        <Input
          s={12}
          label="Confirm Password"
          type="password"
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
        onClick={props.login}
        user="Pilot"
      >
        CREATE ACCOUNT
      </Button>
      <br />
      <br />

      <Link onClick={props.clicked} to="/">
        Already have an account? Click to login
      </Link>
    </Card>
  );
};

export default Pilot;
