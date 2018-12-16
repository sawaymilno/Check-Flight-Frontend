import React, { Component } from "react";
import "./App.css";

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login";
import Foot from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import ExPortal from "../../containers/ExPortal/ExPortal";
import PiPortal from "../../containers/PiPortal/PiPortal";

class App extends Component {
  state = {
    exLoggedIn: false,
    piLoggedIn: false
  };

  /*************************************************************************
   * LOGIN/SIGNUP SUBMIT HANDLER. RENDERS EXAMINER OR PILOT PROFILE
   *************************************************************************/
  loginHandler = e => {
    e.preventDefault();
    console.log(e.target.innerText);
    if (e.target.innerText === "PILOT LOGIN") {
      this.setState({
        ...this.state,
        exLoggedIn: false,
        piLoggedIn: true
      });
    }
    if (e.target.innerText === "EXAMINER LOGIN") {
      this.setState({
        exLoggedIn: true,
        piLoggedIn: false
      });
    }
    window.scrollTo(0, 0);
  };

  /**********************************************************
   * LOGOUT BUTTON CLICK HANDLER. TAKES YOU BACK HOME
   **********************************************************/
  logoutHandler = e => {
    e.preventDefault();
    console.log(e.target);
    if (this.state.piLoggedIn) {
      this.setState({ ...this.state, exLoggedIn: false, piLoggedIn: false });
    }
    if (this.state.exLoggedIn) {
      this.setState({ exLoggedIn: false, piLoggedIn: false });
    }
  };

  render() {
    const exLoggedIn = this.state.exLoggedIn;
    const piLoggedIn = this.state.piLoggedIn;
    return !this.state.exLoggedIn && !this.state.piLoggedIn ? (
      <div className="container">
        <Navigation
          logout={this.logoutHandler}
          exLoggedIn={exLoggedIn}
          piLoggedIn={piLoggedIn}
        />
        <Intro />
        <Login login={this.loginHandler} logout={this.logoutHandler} />
        <Foot />
      </div>
    ) : (
      <div className="container">
        {this.state.exLoggedIn ? (
          <>
            <Navigation
              logout={this.logoutHandler}
              exLoggedIn={exLoggedIn}
              piLoggedIn={piLoggedIn}
            />
            <ExPortal logout={this.logoutHandler} />
            <Foot />
          </>
        ) : (
          <>
            <Navigation
              logout={this.logoutHandler}
              exLoggedIn={exLoggedIn}
              piLoggedIn={piLoggedIn}
            />
            <PiPortal logout={this.logoutHandler} />
            <Foot />
          </>
        )}
      </div>
    );
  }
}

export default App;
