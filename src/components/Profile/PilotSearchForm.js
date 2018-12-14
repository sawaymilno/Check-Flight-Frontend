import React from "react";

import { Input, Icon, Button, Row } from "react-materialize";

const PilotSearchForm = props => {
  const airports = props.airports;
  const airportList = airports.map((el, i) => (
    <Input
      key={i}
      s={12}
      l={6}
      name={el.name}
      type="checkbox"
      value={el.name}
      label={el.name}
      defaultValue="checked"
      onChange={props.checkedAirport}
    />
  ));
  return (
    <Row style={{ textAlign: "left" }}>
      <h6>Airports</h6>
      {airportList}
      <Input s={12} label="Location: City, State">
        {/* <Icon>location_on</Icon> */}
      </Input>
      <Input s={12} style={{ textAlign: "left" }} label="Search Radius">
        {/* <Icon>location_searching</Icon> */}
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
};

export default PilotSearchForm;
