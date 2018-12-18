import React, {Component} from "react";

import {Card, Button, Row, Col} from "react-materialize";
import Canvas from "./Canvas"

class Calendar extends Component {

  state = {
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    currentTime: new Date(Date.now()),
    currentMonth: new Date(Date.now()).getMonth(),
    currentYear: new Date(Date.now()).getYear()+1900,
    available: [{
      date: "2018-12-27T00:00:00.000Z",
      morning: false,
      afternoon: false,
    },],
  };

  componentDidMount = async () => {
    const response = await fetch(
      "http://localhost:3000/users/1/avails"
    );
    const json = await response.json();
    this.setState({ available: json });
    await console.log("available[0] after await", this.state.available[0].date)
  }


  prevMonth = (e) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month - 1) < 0) {
      month += 12
      year -= 1
    }

    let date = new Date(`${months[month]} ${year}`)

    this.setState({
      currentTime: date,
      currentMonth: month - 1,
      currentYear: year,
    })
  }

  nextMonth = (e) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month + 1) >= 12) {
      month -= 12
      year += 1
    }

    let date = new Date(`${months[month]} ${year}`)

    this.setState({
      currentTime: date,
      currentMonth: month + 1,
      currentYear: year,
    })
  }

  setAvail = (available, dayTime) => {

    if(dayTime === "morning") {
      this.setState({
        available:{
          morning: available,
          afternoon: this.state.available.afternoon,
        },
      })
    }

    else if (dayTime === "afternoon") {
      this.setState({
        available:{
          morning: this.state.available.morning,
          afternoon: available,
        }
      })
    }

  }

  render() {

    let monthName = this.state.month[this.state.currentMonth]
    return (
      <Card>
          <div className="col s12  center-align">
            <Row>
              <div className="col s12 m3">

                <Button onClick={this.prevMonth} href="#" id="prev-month" className="previous round" >&#8249;</Button>
              </div>
              <div className="col s12 m6 center-align">
                <h4 id="currentMonth">{monthName} {this.state.currentYear}</h4>
              </div>
              <div className="col s12 m3">
                <Button onClick={this.nextMonth} href="#" id="next-month" className="next round">&#8250;</Button>
              </div>
            </Row>
            <Row>

              <Canvas className="center-align" state={this.state} setAvail={this.setAvail} cTime={this.state.currentTime} cMonth={this.state.currentMonth} monthName={monthName} isDisabled={this.isDisabled}/>

            </Row>
            <Row>
              <Col s={7} m={2} className='offset-m1'>Available in AM:</Col>
              <Col s={3} m={1} className='#fff59d yellow lighten-3 yellow-text text-lighten-3'>eas</Col>
              <Col s={7} m={2}>Available in PM:</Col>
              <Col s={3} m={1} className='#4fc3f7 light-blue lighten-2 light-blue-text text-lighten-2'>ter</Col>
              <Col s={7} m={2}>Available all day</Col>
              <Col s={3} m={1} className='#b2ff59 light-green accent-2 light-green-text text-accent-2'>egg</Col>
            </Row>
          </div>
    </Card>)
  }
}

export default Calendar;
