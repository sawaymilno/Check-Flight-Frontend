import { Input, Row, Card } from "react-materialize";

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

    this.props.airports.forEach((el, i) => {
      el.isChecked = false;
    });
    this.setState({ airports: this.props.airports });
  }

  /**************************************************
   *****  Check Boxes Click Handler *******************
   **************************************************/

  airportCheckboxHandler = e => {
    let id = +e.target.id - 1;

    if (!this.state.airports[id].isChecked) {
      this.setState(prevState => ({
        prevState,
        ...this.state.airports.map((el, i) => {
          if (i === id) {
            el.isChecked = true;
          }
          return el;
        })
      }));
    } else {
      this.setState(prevState => ({
        prevState,
        ...this.state.airports.map((el, i) => {
          if (i === id) {
            el.isChecked = false;
          }
          return el;
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
        id={airport.id.toString()}
        type="checkbox"
        key={i}
        onChange={this.airportCheckboxHandler}
        checked={this.state.airports[i].isChecked}
      />
    ));
    airports
      .filter(el => el.isChecked === true)
      .map((el, i) => <Card key={i}>{el.name}</Card>);
    return (
      <>
        <Row style={{ textAlign: "left" }}>
          <h5>Find Examiners</h5>
          <h6>
            <b>Filter by Airport:</b>
            <hr /> {checkboxes}
          </h6>
        </Row>
        <hr />
        <br />
        <br />
        <div>
          <PilotSearchResults airports={this.state.airports} />
        </div>
      </>
    );
  }
}

export default PilotSearchForm;
