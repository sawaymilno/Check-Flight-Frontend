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
      currentUser: null,
      airports: [],
      examAirports: [],
      loginError: null,
      available: [],
    };
  }

  componentDidMount = async id => {
    const jwt = localStorage.getItem('jwt')
    const user_id = JSON.parse(atob(jwt.split('.')[1])).user_id
    await this.getAirports()
    await this.getAvails(user_id)
    await this.getUser(user_id)
  }

  getUser = async id => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      headers: { Authorization: localStorage.getItem("jwt") }
    });
    const json = await response.json();
    this.setState({ currentUser: json, loginError: null })
  }

  getAirports = async () => {
    const response = await fetch(
      "http://localhost:3000/airports",
      {
        headers: {"Authorization": localStorage.getItem('jwt')}
      }
    );
    const json = await response.json();
    this.setState({ airports: json })
  }

  getAvails = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}/avails`,
    {
      headers: {"Authorization": localStorage.getItem('jwt')}
    });

    const json = await response.json();
    this.setState({ available: json });
  };


  putAirports = async (update) => {
    let airports = update.airports
    console.log("current state",this.state.examAirports)
    //console.log("update",update);
    let body = JSON.stringify(update)
    console.log("body",body);
    let user_id = this.state.currentUser.id
    await fetch(`http://localhost:3000/users/${user_id}/airports`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: localStorage.getItem("jwt")
      },
      body: body
    })

    //console.log("in putAirports update",update);
    this.setState(() => ({
    ...this.state,
      examAirports: airports
    }))
    await console.log("new state",this.state.examAirports);
  }

  putUser = async (update) => {
    let body = JSON.stringify(update)
    let user_id = this.state.currentUser.id
    await fetch(`http://localhost:3000/users/${user_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: localStorage.getItem("jwt")
      },
      body: body
    })
    this.setState(() => ({
    ...this.state,
      currentUser: update
    }))
  }

  updateExaminer = async (updatedUser,updatedAirports) => {
    console.log("im here");
    this.putUser(updatedUser)
    this.putAirports(updatedAirports)
  }

  editToggle = () => {
    this.setState({
      isDisabled: this.state.isDisabled ? false : true
    });
  };

  /*************************************************************************
   * LOGIN SUBMIT HANDLER. RENDERS EXAMINER OR PILOT PROFILE
   *************************************************************************/

  loginHandler = async (userType, user) => {
    const loginResponse = await fetch('http://localhost:3000/auth/login',
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      // success
      if (loginResponse.status.toString().match(/^20.$/)) {
        let json = await loginResponse.json()

        let jwt = json.auth_token

        localStorage.setItem('jwt', jwt)

        let user_id = JSON.parse(atob(jwt.split('.')[1])).user_id

        await this.getAirports()
        await this.getAvails(user_id)
        await this.getUser(user_id)

        window.scrollTo(0, 0);
      }
      // login error
      else {
        this.setState({ loginError:
          {
            status: loginResponse.status,
            message: 'Incorrect username or password',
            userType: userType
          }
        })
      }
  };

  /**********************************************************
   * LOGOUT BUTTON CLICK HANDLER. TAKES YOU BACK HOME
   **********************************************************/
  logoutHandler = e => {
    localStorage.removeItem("jwt");

    this.setState({ currentUser: null });

    window.scrollTo(0, 0);
  };

  render() {

    return !this.state.currentUser ? (
      <div className="container">
        <Navigation
          logout={this.logoutHandler}
          currentUser={this.state.currentUser}
        />
        <Intro />
        <Login
          login={this.loginHandler}
          logout={this.logoutHandler}
          getUser={this.getUser}
          getAirports={this.getAirports}
          getAvails={this.getAvails}
          loginError={this.state.loginError}
        />
        <Foot />
      </div>
    ) : (
      <div className="container">
        {this.state.currentUser.isExaminer ? (
          <>
            <Navigation
              logout={this.logoutHandler}
              currentUser={this.state.currentUser}
            />
            <ExPortal
              currentUser={this.state.currentUser}
              isDisabled={this.state.isDisabled}
              logout={this.logoutHandler}
              editToggle={this.editToggle}
              airports={this.state.airports}
              avails={this.state.available}
              updateExaminer={this.updateExaminer}
              examAirports={this.state.examAirports}
            />
            <Foot />
          </>
        ) : (
          <>
            <Navigation
              logout={this.logoutHandler}
              currentUser={this.state.currentUser}
            />
            <PiPortal
              logout={this.logoutHandler}
              currentUser={this.state.currentUser}
              airports={this.state.airports}
            />
            <Foot />
          </>
        )}
      </div>
    );
  }
}

export default App;
