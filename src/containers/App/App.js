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
      loginError: null,
      available: [],
    };
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
//this function takes one path, one id, another path and an OPTIONAL second ID
  // getMin2Max4 = async (path1, id1, path2, id2) => {
  //   if (!id2) {
  //     id2 = "";
  //   }
  //   const response = await fetch(
  //     `http://localhost:3000/${path1}/${id1}/${path2}/${id2}`
  //   );
  //   const json = await response.json();
  //   this.(() => ({ [path1[id1]]: { [path2]: json } }));
  // };

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
