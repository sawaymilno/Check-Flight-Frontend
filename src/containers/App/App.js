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
      users: []
    };
  }

  get2params = async (path1, id1, path2, id2) => {
    if (!id1) {id1 = ""}
    if (!path2) {path2=""}
    if (!id2) {id2=""}
    const response = await fetch(
      `http://localhost:3000/${path1}/${id1}`
    );
    const json = await response.json();
    this.setState(() => ({ [path1] : json }));
  };

  getMin2Max4 = async (path1, id1, path2, id2) => {
    if (!id2) {id2=""}
    const response = await fetch(
      `http://localhost:3000/${path1}/${id1}/${path2}/${id2}`
    );
    const json = await response.json();
    this.setState(() => ({ [path1[id1]]: {[path2]:json} }));
  };

  editToggle = () => {
    let isDisabled;
    this.state.isDisabled ? (isDisabled = false) : (isDisabled = true);
    this.setState({
      isDisabled: isDisabled
    });
    console.log("this.state",this.state);
  };

  /*************************************************************************
   * LOGIN SUBMIT HANDLER. RENDERS EXAMINER OR PILOT PROFILE
   *************************************************************************/

  loginHandler = async e => {
    e.preventDefault();
    // console.log("target.id",e.target.id);
    let value = e.target.id;
    await this.get2params('users',1);
    await this.get2params("airports")

    if (value === "Pilot") {
      this.setState({
        ...this.state,
        exLoggedIn: false,
        piLoggedIn: true
      });
    }
    if (value === "Examiner") {
      this.setState({
        ...this.state,
        exLoggedIn: true,
        piLoggedIn: false
      });
    }
    window.scrollTo(0, 0);
    // console.log("users",this.state.users,"airports",this.state.airports);
  };

  /**********************************************************
   * LOGOUT BUTTON CLICK HANDLER. TAKES YOU BACK HOME
   **********************************************************/
  logoutHandler = e => {
    e.preventDefault();
    console.log("e.target",e.target);
    if (this.state.piLoggedIn) {
      this.setState({ ...this.state, exLoggedIn: false, piLoggedIn: false });
    }
    if (this.state.exLoggedIn) {
      this.setState({ exLoggedIn: false, piLoggedIn: false });
    }
    window.scrollTo(0, 0);
  };

  render() {
    // return (<PiPortal />)
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
            <ExPortal
              state={this.state}
              logout={this.logoutHandler}
              editToggle={this.editToggle}
            />
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
