import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-materialize";

let data = [
  {
    airport: "airportTitle",
    examiners: ["jim ", "Larry ", "bob ", "rick "]
  },
  {
    airport: "airportTitle",
    examiners: ["jim ", "jim ", "jim ", "jim "]
  },
  {
    airport: "airportTitle",
    examiners: ["jim ", "jim ", "jim ", "jim "]
  },
  {
    airport: "airportTitle",
    examiners: ["jim ", "jim ", "jim ", "jim "]
  },
  {
    airport: "airportTitle",
    examiners: ["jim ", "jim ", "jim ", "jim "]
  }
];

// let ex = data.map(el => el.examiners);
// console.log(ex.name);

const card = data.map((el, i) => (
  <Card
    key={i}
    style={{ textAlign: "left" }}
    title={el.airport}
    actions={[
      <Link key={i} to="/">
        Examiners at this location
      </Link>
    ]}
    // reveal={<Link to='/'>{el.examiners}</Link>}
  >
    Boulder, CO
  </Card>
));

const PilotProfile = props => <>{card}</>;

export default PilotProfile;
