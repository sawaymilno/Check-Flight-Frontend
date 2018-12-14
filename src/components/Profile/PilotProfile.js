import React from "react";
import { Input, Card, Button } from "react-materialize";

const PilotProfile = props => (
  <div>
    <Card>
      <h4>Pilot Profile</h4>
      <Input s={12} label="location" />
      <Input s={12} label="examiner" />
      <Button className="green accent-3" type="submit">SEARCH</Button>
    </Card>
  </div>
);

export default PilotProfile;
