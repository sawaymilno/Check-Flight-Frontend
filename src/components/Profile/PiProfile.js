import React from "react";

import { Card, Icon, Button, Row, Input } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

const PiProfile = props => {
  const toggle = e => {
    props.editToggle(e);
  };

  return (
    <Card style={{ textAlign: "center" }}>
      <Icon large>account_circle</Icon>
      <h4>Pilot Profile</h4>
      <div style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Button
          style={{ width: "70%" }}
          onClick={toggle}
          className="green accent-3" 
          type="submit"
        >
          EDIT PROFILE
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Button
          style={{ width: "70%" }}
          onClick={toggle}
          className="green accent-3"
          type="submit"
          onClick={props.logout}
        >
          LOGOUT
        </Button>
        <br />
        <br />
        <br />
      </div>
      <Row>
        <Input
          s={12}
          m={6}
          l={3}
          label="First Name"
          defaultValue="Shawn"
          disabled={props.isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Last Name"
          defaultValue="Milne"
          disabled={props.isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Phone"
          defaultValue="978-290-1692"
          disabled={props.isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Email"
          defaultValue="Shawn.M.Milne@gmail.com"
          disabled={props.isDisabled}
        />
      </Row>
      <PilotSearchForm />
    </Card>
  );
};

export default PiProfile;
