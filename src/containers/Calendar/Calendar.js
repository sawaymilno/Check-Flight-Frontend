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
    available: {
      date: '12 05 2018',
      am: false,
      pm: false,
    },
  };

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

    if(dayTime === "am") {
      this.setState({
        available:{
          am: available,
          pm: this.state.available.pm,
        },
      })
    }

    else if (dayTime === "pm") {
      this.setState({
        available:{
          am: this.state.available.am,
          pm: available,
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
              <Col s={3} m={1} className='#fff9c4 yellow lighten-4 yellow-text text-lighten-4'>eas</Col>
              <Col s={7} m={2}>Available in PM:</Col>
              <Col s={3} m={1} className='#ffebee red lighten-5 red-text text-lighten-5'>ter</Col>
              <Col s={7} m={2}>Available all day</Col>
              <Col s={3} m={1} className='#ba68c8 purple lighten-2 purple-text text-lighten-2'>egg</Col>
            </Row>
          </div>
    </Card>)
  }
}

export default Calendar;
