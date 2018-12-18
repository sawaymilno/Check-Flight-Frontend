import React from "react";
// import { Link } from "react-router-dom";
import { Row, CollectionItem, Card } from "react-materialize";

const PilotSearchResults = props => {
  console.log(props.airports)
  
  const filteredAirports = props.airports
    .filter(el => el.isChecked)
    .map((el, i) => (
      <Card key={el.id} title={"Examiners at " + el.name} actions={
        el.users.map((ex, i) => (
          <div key={i}>
              <CollectionItem href={ex.firstName + ex.lastName}>
                {ex.firstName + " " + ex.lastName}
              </CollectionItem>
              <hr />
            </div>
          ))
      } />
    ));
  return <Row>{filteredAirports}</Row>;
};

export default PilotSearchResults;
