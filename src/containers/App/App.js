import React, { Component } from "react";
// import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login";
import Foot from "../../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Login />
        <Foot />
      </div>
    );
  }
}

export default App;
