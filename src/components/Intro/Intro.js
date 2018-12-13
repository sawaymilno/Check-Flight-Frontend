import React from "react";
import { Link } from "react-router-dom";
import { Row, Navbar, NavItem, Icon, Card, CardTitle } from "react-materialize";

import "./Intro.css";
import "../../containers/App/App.css";

const Intro = () => (
  <Card
  header={<CardTitle image='https://flyefi.com/wp-content/uploads/2017/04/cessna-172-skyhawk-later-models-08.jpg' alt='Photo of Airplane'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>
);

export default Intro;
