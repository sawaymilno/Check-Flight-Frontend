import React, { Component } from "react";
import "./App.css";
import { Row } from "react-materialize";

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login";
import Foot from "../../components/Footer/Footer";
import Calendar from "../../containers/Calendar/Calendar";
import Intro from "../../components/Intro/Intro";
import ExPortal from "../../containers/ExPortal/ExPortal";
import PiPortal from "../../containers/PiPortal/PiPortal";

class App extends Component {
  state = {
    exLoggedIn: false,
    piLoggedIn: true
  };

  render() {
    return !this.state.exLoggedIn && !this.state.piLoggedIn ? (
      <div className="container">
        <Navigation />
        <Intro />
        <Login />
        <Foot />
      </div>
    ) : (
      <div className="container">
        {this.state.exLoggedIn ? <ExPortal /> : <PiPortal />}
      </div>
    );
  }
}

export default App;
