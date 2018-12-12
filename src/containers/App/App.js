import React, { Component } from 'react';
// import './App.css';

/************ COMPONENT IMPORTS ******************/
import Navbar from '../../components/Navbar/Navbar'
import Login from '../Login/Login'
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Login />
      </div>
    );
  }
}

export default App;
