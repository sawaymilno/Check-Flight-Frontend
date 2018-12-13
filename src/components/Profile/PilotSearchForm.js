import React from "react";

import { Input, Icon, Button, Row } from "react-materialize";

const PilotSearchForm = () => (
  <Row style={{ textAlign: "left" }}>
    <Input s={12} label="Search Airports">
      <Icon>local_airport</Icon>
    </Input>
    <Input s={12} style={{ textAlign: "left" }} label="Search Examiners">
      <Icon>how_to_reg</Icon>
    </Input>
    <div className="center-align">
      <Button style={{ width: "70%" }} className="green accent-3" type="submit">
        Search
      </Button>
    </div>
  </Row>
);

export default PilotSearchForm;
