import React from "react";
import { Button, Card, Row, Input, Icon } from "react-materialize";
import { Link } from "react-router-dom";

const Examiner = props => {
  return (
    <Row>
      <Card>
        <h4 style={{ textAlign: "center" }}>
          {" "}
          <Icon large>account_circle</Icon>
          <br />
          EXAMINER SIGN UP
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

        <Link onClick={props.clicked} to="/">
          Already have an account? Click to login
        </Link>
      </Card>
    </Row>
  );
};

export default Examiner;
