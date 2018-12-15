import React from "react";
import { Link } from "react-router-dom";
import { Row, Collection, CollectionItem, Card } from "react-materialize";

const PilotSearchResults = props => {
  const filteredAirports = props.airports
    .filter(el => el.isChecked)
    .map((el, i) => (
      <Card
        title={el.name}
        actions={[
          <Collection>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
            <CollectionItem>
              <a href={el.name}>{el.name}</a>
            </CollectionItem>
          </Collection>
        ]}
      />
    ));

  return <Row>{filteredAirports}</Row>;
};

export default PilotSearchResults;
