import React, { Component } from "react";
//import { Parallax } from "react-materialize";
import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login"
import Foot from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import ExPortal from "../../containers/ExPortal/ExPortal";
import PiPortal from "../../containers/PiPortal/PiPortal";
// import PilotProfile from '../../components/Profile/PilotProfile'


class App extends Component {

  state = {
    exLoggedIn: true,
    piLoggedIn: false,
  }
  render() {
    return (!this.state.exLoggedIn && !this.state.piLoggedIn) ? (
      <div className='container'>
        <Navigation />
        <Intro />
        {/* <PilotProfile /> */}
        <Login />
        <Foot />
      </div>
    )
    :
    (<div >
      {this.state.exLoggedIn ? <ExPortal /> : <PiPortal />}
     </div>
   );
  }
}

export default App;
