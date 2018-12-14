import React from "react";

import PilotSearchResults from "./PilotSearchResults";
import { Card, Icon, Button } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

const PilotProfile = props => (
  <Card style={{ textAlign: "center" }}>
    <Icon large>account_circle</Icon>
    <h4 style={{ textAlign: "center" }}>Brett Bloxom</h4>
    <h5>Boulder, CO</h5>
    <Button style={{ width: "70%" }} className="green accent-3">
      Edit Profile
    </Button>
    <br />
    <br />
    <PilotSearchForm
      searched={props.searched}
      airports={props.airports}
      checked={props.checked}
      isChecked={props.isChecked}
    />
    <br />
    <h5 style={{ textAlign: "left" }}>Search Results:</h5>
    <div style={{ textAlign: "left" }}>
      <PilotSearchResults airports={props.airports} />
    </div>
  </Card>
);

export default PilotProfile;
