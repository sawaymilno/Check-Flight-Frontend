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
      currentUser: {}
    };
  }

  getUser = async (id) => {
    const response = await fetch(
      `http://localhost:3000/users/${id}`,
      {
        headers: {"Authorization": localStorage.getItem('jwt')}
      }
    );
    const json = await response.json();
    let type = json.isExaminer ? 'exLoggedIn' : 'piLoggedIn'
    this.setState(() => ({ currentUser: json, [type]: true }));

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

  loginHandler = async (userType, user) => {
    let response = await fetch('http://localhost:3000/auth/login',
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
    let json = await response.json()
    let jwt = json.auth_token

    localStorage.setItem('jwt', jwt)

    let user_id = JSON.parse(atob(jwt.split('.')[1])).user_id

    await this.getUser(user_id)

    if (userType === "Pilot") {
      this.setState({
        ...this.state,
        exLoggedIn: false,
        piLoggedIn: true
      });
    }

    if (userType === "Examiner") {
      this.setState({
        ...this.state,
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
    localStorage.removeItem('jwt')

    this.setState({ exLoggedIn: false, piLoggedIn: false });

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
        <Login
          login={this.loginHandler}
          logout={this.logoutHandler}
          getUser={this.getUser}
        />
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
              currentUser={this.state.currentUser}
              isDisabled={this.state.isDisabled}
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
            <PiPortal
              logout={this.logoutHandler}
              currentUser={this.state.currentUser}
            />
            <Foot />
          </>
        )}
      </div>
    );
  }
}

export default App;
