import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../containers/App/App.css";

const Navbar = () => (
  <nav className="zone blue sticky">
    <ul className="main-nav">
      <li className="link">
        <Link to="/Home">Check Flight</Link>
      </li>

      <li className="push">
        <Link to="/Login">Signin</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
