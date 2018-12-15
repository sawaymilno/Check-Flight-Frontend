import { Input, Icon, Button, Row, Card } from "react-materialize";

import React, { Component } from "react";
import PilotSearchResults from "./PilotSearchResults";

class PilotSearchForm extends Component {
  state = {
    airports: [],
    users: []
  };

  /********************************************
   **** Fetch Airport Data ********************
   ********************************************/

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/airports", {
      credentials: "include"
    });
    const json = await response.json();
    json.forEach((el, i) => {
      el.isChecked = false;
    });
    this.setState({ ...this.state, airports: json });
    this.getUsers();
  }

  /********************************************
   **** Fetch User Data ********************
   ********************************************/

  getUsers = async () => {
    const response = await fetch("http://localhost:3001/users", {
      credentials: "include"
    });
    const json = await response.json();
    this.setState({
      ...this.state,
      users: json
    });
  };

  /**************************************************
   *****  Check Boxes Click Handler *******************
   **************************************************/

  airportCheckboxHandler = e => {
    console.log(e.target.id.slice(6));
    const id = parseInt(e.target.id.slice(6)) - 4;

    if (!this.state.airports[id].isChecked) {
      this.setState(prevState => ({
        ...this.state.airports.map((el, i) => {
          if (i === id) {
            el.isChecked = true;
            return el;
          }
        })
      }));
    } else {
      this.setState(prevState => ({
        ...this.state.airports.map((el, i) => {
          if (i === id) {
            el.isChecked = false;
            return el;
          }
        })
      }));
    }
  };

  render() {
    const airports = this.state.airports;
    const checkboxes = airports.map((airport, i) => (
      <Input
        s={12}
        name={airport.name}
        label={airport.name}
        type="checkbox"
        key={i}
        onChange={this.airportCheckboxHandler}
        checked={this.state.airports[i].isChecked}
      />
    ));
    const checkedAirports = airports
      .filter(el => el.isChecked === true)
      .map((el, i) => <Card>{el.name}</Card>);
    return (
      <>
        <Row style={{ textAlign: "left" }}>Filter Airports: {checkboxes}</Row>
        <hr /><br/><br/>
        <div>
        <PilotSearchResults airports={this.state.airports} />
        </div>
      </>
    );
  }
}

export default PilotSearchForm;
