import React, { Component } from "react";
import { Row } from "react-materialize"
// import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login";
import Intro from "../../components/Intro/Intro";

class App extends Component {
  render() {
    return (
      <Row className='container'>
        <Navigation />
        <Intro />
        <Login />
      </Row>
    );
  }
}

export default App;
