import React, { Component } from "react";
import { Row } from "react-materialize";
import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login"
import Foot from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
// import PilotProfile from '../../components/Profile/PilotProfile'


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navigation />
        <Intro />
        {/* <PilotProfile /> */}
        <Login />
        <Foot />
      </div>
    );
  }
}

export default App;
