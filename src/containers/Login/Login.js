import React, { Component } from "react";

import { Button, Row } from "react-materialize";
// import { Link } from "react-router-dom";

import Pilot from "./Pilot";
import Examiner from "./Examiner";
import LoginForm from "./LoginForm";

class Login extends Component {

  state = {
    isUser: true,
    isPilot: false,
    isExaminer: false
  };

  /**************************************************************************
   * event handler for link at bottom of sign up form to switch to login form *
   **************************************************************************/
  switchToLoginHandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      isUser: true
    });
  };

  /**************************************************************************
   * event handler for link at bottom of Login form to switch to sign up form *
   **************************************************************************/
  switchToSigninHandler = e => {
    e.preventDefault();
    this.setState({
      isUser: false,
      isPilot: false,
      isExaminer: false
    });
  };

  /**************************************************************************
   * click handler on pilot button to render pilot registration form *
   **************************************************************************/
  showPilotFormHandler = e => {
    e.preventDefault();
    this.setState({
      isPilot: true,
      isExaminer: false,
      isUser: false
    });
  };

  /**************************************************************************
   * click handler on examiner button to render examiner registration form *
   **************************************************************************/
  showExaminerFormHandler = e => {
    e.preventDefault();
    this.setState({
      isExaminer: true,
      isPilot: false,
      isUser: false
    });
  };

  render() {
    return !this.state.isUser ? (

//shawn's branch

//       <div>
//         <Card>
//           <h4 style={{ textAlign: "center" }}>
//             {" "}
//             <Icon large>account_circle</Icon>
//             <br />
//             SIGN UP
//           </h4>

//           <Input s={6} label="First Name" validate required />
//           <Input s={6} label="Last Name" validate required />
//           <Input s={12} label="Telephone" validate type="tel">
//             <Icon>phone</Icon>
//           </Input>
//           <Input type="email" label="Email" s={12} validate required>
//             <Icon>email</Icon>
//           </Input>
//           <Input s={12} label="Username" validate required>
//             <Icon>account_circle</Icon>
//           </Input>
//           <Input s={6} label="Password" type="password" validate required>
//             <Icon>lock</Icon>
//           </Input>
//           <Input
//             s={6}
//             label="Confirm Password"
//             type="password"
//             validate
//             required
//           />
//           <Button type="submit" style={{ width: "100%" }} waves="light">
//             CREATE ACCOUNT
//           </Button>
//           <br />
//           <br />

//           <Link onClick={this.switchToLoginHandler} to="/Login">
//             Already have an account? Click to login
//           </Link>
//         </Card>
//       </div>
//     ) : (
//       <div>
//         <Card>
//           <h4 style={{ textAlign: "center" }}>
//             {" "}
//             <Icon large>account_circle</Icon>
//             <br />
//             Login
//           </h4>

//           <Input s={12} label="Username" validate required>
//             <Icon>how_to_reg</Icon>
//           </Input>
//           <Input s={12} label="Password" type="password" validate required>
//             <Icon>lock</Icon>
//           </Input>
//           <Button type="submit" style={{ width: "100%" }} waves="light">
//             LOGIN
//           </Button>
//           <br />
//           <br />

//           <Link onClick={this.switchToSigninHandler} to="/Register">
//             Need to sign up? Click here
//           </Link>
//         </Card>
//       </div>
//End Shawn's Branch
      <div className="row">
        <div>
          <Button

            large
            onClick={this.showPilotFormHandler}
            className="green accent-3"
            style={{ width: "100%" }}>

            REGISTER AS PILOT

          </Button>
        </div>

      <br />
      <br />

        <div>
          <Button
            large
            className="green accent-3"
            onClick={this.showExaminerFormHandler}
            style={{ width: "100%" }}
          >
            REGISTER AS EXAMINER
          </Button>
          {this.state.isPilot ? (
            <Pilot clicked={this.switchToLoginHandler} />
          ) : null}
          {this.state.isExaminer ? (
            <Examiner clicked={this.switchToLoginHandler} />
          ) : null}
          <br />
        </div>
      </div>
    ) : (
      <LoginForm clicked={this.switchToSigninHandler} />
    );
  }
}

export default Login;
