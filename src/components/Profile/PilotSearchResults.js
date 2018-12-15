import React from "react";
import { Link } from "react-router-dom";
import { Row, Collection, CollectionItem } from "react-materialize";

const examiners = ["bob", "tony", "rick", "jimmy"];

const PilotSearchResults = props => {
  const ex = examiners.map((el, i) => (
    <CollectionItem href={el} key={i}>
      {el}
    </CollectionItem>
  ))
  const airports = props.airports;
  const airportSearchList = airports.map((el, i) => (
    <Collection key={i} header={el.name}>
      {ex}
    </Collection>
  ));

  return <Row>{airportSearchList}</Row>;
};

export default PilotSearchResults;
