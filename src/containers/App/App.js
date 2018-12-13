import React, { Component } from "react";
import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login"
import Foot from "../../components/Footer/Footer";
// import PilotProfile from '../../components/Profile/PilotProfile'


class App extends Component {
  render() {
    return (
      <Row className='container'>
        <Navigation />
        <Intro />
        <Login />
        {/* <PilotProfile /> */}
        <Login />
        <Foot />
      </Row>
    );
  }
}

export default App;
