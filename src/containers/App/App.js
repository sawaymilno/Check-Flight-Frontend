import React, { Component } from "react";
// import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navigation from "../../components/Navbar/Navbar";
import Login from "../Login/Login";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Login />
      </div>
    );
  }
}

export default App;
