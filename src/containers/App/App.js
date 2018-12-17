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

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      exLoggedIn: false,
      piLoggedIn: false,
      users: [],
    }
  };

  get = async () => {
    const response = await fetch("http://localhost:3000/users/1")
    const json = await response.json()
    this.setState(() => ({users: json}))
   }

   editToggle = () => {
     let isDisabled;
     this.state.isDisabled ? (isDisabled = false) : (isDisabled = true);
     this.setState({
       isDisabled: isDisabled
     });
     console.log(this.state);
   };

  /*************************************************************************
   * LOGIN/SIGNUP SUBMIT HANDLER. RENDERS EXAMINER OR PILOT PROFILE
   *************************************************************************/
  loginHandler = async e => {
    e.preventDefault();
    console.log(e.target.innerText);
    let value = e.target.innerText
    await this.get()

    if (value === "PILOT LOGIN") {
      this.setState({
        ...this.state,
        exLoggedIn: false,
        piLoggedIn: true
      });
    }
    if (value === "EXAMINER LOGIN") {
      this.setState({
        exLoggedIn: true,
        piLoggedIn: false
      });
    }

    window.scrollTo(0, 0);
    console.log(this.state.users);
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
    window.scrollTo(0, 0)
  };

  render() {

    const exLoggedIn = this.state.exLoggedIn;
    const piLoggedIn = this.state.piLoggedIn;
    return !exLoggedIn && !piLoggedIn ? (
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
        {exLoggedIn ? (
          <>
            <Navigation
              logout={this.logoutHandler}
              exLoggedIn={exLoggedIn}
              piLoggedIn={piLoggedIn}
            />
            <ExPortal state={this.state} logout={this.logoutHandler} editToggle={this.editToggle}  />
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
