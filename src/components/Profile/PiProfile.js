import React from "react";

import { Card, Icon, Button, Row, Input } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

const PiProfile = ({ currentUser, editToggle, isDisabled, logout }) => {
  const toggle = e => {
    editToggle(e);
  };

  return (
    <Card style={{ textAlign: "center" }}>
      <Icon large>account_circle</Icon>
      <h4>Pilot Profile</h4>
      <div style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Button
          style={{ width: "50%" }}
          onClick={toggle}
          className="green accent-3"
          type="submit"
        >
          Edit Profile
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Button
          style={{ width: "50%" }}
          className="green accent-3"
          type="submit"
          onClick={logout}
        >
          Logout
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
          defaultValue={currentUser.firstName}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Last Name"
          defaultValue={currentUser.lastName}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Phone"
          defaultValue={currentUser.phone}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Email"
          defaultValue={currentUser.email}
          disabled={isDisabled}
        />
      </Row>
      <PilotSearchForm />
    </Card>
  );
};

export default PiProfile;
