import React from "react";

import PilotSearchResults from "./PilotSearchResults";
import { Card, Icon, Button, Row, Input } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

const PilotProfile = props => (
  <Card style={{ textAlign: "center" }}>
    <Icon large>account_circle</Icon>
    <h4 style={{ textAlign: "center" }}>Brett Bloxom</h4>
    <h5>Boulder, CO</h5>
    <Button
      style={{ width: "70%" }}
      className="green accent-3"
      onClick={props.isEditing}
    >
      Edit Profile
    </Button>
    <br />
    <br />
    <PilotSearchForm searched={props.searched} airports={props.airports} />
    <br />
  </Card>
);

export default PilotProfile;
