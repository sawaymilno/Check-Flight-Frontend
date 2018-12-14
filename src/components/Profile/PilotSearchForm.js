import React from "react";

import { Input, Icon, Button, Row } from "react-materialize";

let api =
  "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json";

const PilotSearchForm = props => (
  <Row style={{ textAlign: "left" }}>
    <Input
      s={6}
      type="select"
      icon="local_airport"
      label="Airports"
      defaultValue="Airports"
    >
      <option value="" />
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
      <option>Airport</option>
    </Input>
    <Input s={6} type="select" label="Examiners" icon="how_to_reg">
      <option value="" />
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
      <option>Examiner</option>
    </Input>
    <Input s={6} label="Location: City, State">
      <Icon>location_on</Icon>
    </Input>
    <Input s={6} style={{ textAlign: "left" }} label="Search Radius">
      <Icon>location_searching</Icon>
    </Input>
    <div className="center-align">
      <Button
        style={{ width: "70%" }}
        className="green accent-3"
        type="submit"
        onClick={props.searched}
      >
        Search
      </Button>
    </div>
  </Row>
);

export default PilotSearchForm;
