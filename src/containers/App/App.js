import React, { Component } from "react";
import "./App.css";
import { Row } from "react-materialize"

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
// import Login from "../Login/Login";
import Foot from "../../components/Footer/Footer";
// import Intro from "../../components/Intro/Intro";
// import ExPortal from "../../containers/ExPortal/ExPortal";
// import PiPortal from "../../containers/PiPortal/PiPortal";
// import PilotProfile from "../../components/Profile/PilotSearchResults";
import Calendar from "../../containers/Calendar/Calendar";

class App extends Component {
  state = {
    exLoggedIn: true,
    piLoggedIn: false
  };
  render() {
    // return !this.state.exLoggedIn && !this.state.piLoggedIn ? (
    //   <div className="container">
    //     <Navigation />
    //     <Intro />
    //     {/* <PilotProfile /> */}
    //     <Login />
    //     <PiPortal />
    //     <Foot />
    //   </div>
    // ) : (
    //   <div >
    //     {this.state.exLoggedIn ? <ExPortal /> : <PiPortal />}
    //   </div>
    // );
    return (
      <Row>
      <Navigation />
      <Calendar />
      <Foot />
    </Row>
    )
  }
}

export default App;
