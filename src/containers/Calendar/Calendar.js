import React, {Component} from "react";

import {Card, Button} from "react-materialize";
import Canvas from "./Canvas"

// import { Link } from "react-router-dom";

// import Pilot from "./Pilot";
// import Examiner from "./Examiner";
// import LoginForm from "./LoginForm";

class Calendar extends Component {

  state = {
    day: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
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
    daysInMonths: [
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ],
    currentMonth: 11,
    currentYear: 2018,
    available: {
      am: false,
      pm: false,
    },
  };

  // calCellCreator = (currentMonth, calendar) => {
  //
  //   for (let r = 0; r < 5; r++) {
  //     var row = document.createElement('tr')
  //
  //     for (let i = 1; i < 7; i++) {
  //       let dayInfo = document.createElement('td')
  //       let days = i + (r * 7)
  //       let d = new Date(2018, currentMonth, days)
  //       console.log(d);
  //       dayInfo.innerText = day[d.getDay()]
  //       dayInfo.innerHTML += "<br>"
  //       dayInfo.innerText += d.getDate()
  //       dayInfo.innerHTML += "<br>"
  //       dayInfo.innerText += month[d.getMonth()] + ' ' + (1900 + d.getYear())
  //       row.appendChild(dayInfo)
  //       console.log(month[currentMonth])
  //       if (days > daysInMonths[currentMonth] - 1) {
  //         break
  //       }
  //     }
  //     calendar.appendChild(row)
  //   }
  // }

  prevMonth = (e) => {
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month - 1) < 0) {
      month += 12
      year -= 1
    }

    console.log(month);
    this.setState({
      currentMonth: month - 1,
      currentYear: year
    })
  }

  nextMonth = (e) => {
    let month = this.state.currentMonth
    let year = this.state.currentYear
    if ((month + 1) >= 12) {
      month -= 12
      year += 1
    }
    console.log(month);
    this.setState({
      currentMonth: month + 1,
      currentYear: year
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
    return (<Card>
      <div className="container" id="calendar">
        <div className="row">
          <div className="col s12 form center-align">
           {/* Calendar Header */}
            <div className="row valign-wrapper">
              <div className="col s3">
                <Button onClick={this.prevMonth} href="#" id="prev-month" className="previous round">&#8249;</Button>
              </div>
              <div className="col s6 center-align">
                <h4 id="currentMonth">{this.state.month[this.state.currentMonth]} {this.state.currentYear}</h4>
              </div>
              <div className="col s3">
                <Button onClick={this.nextMonth} href="#" id="next-month" className="next round">&#8250;</Button>
              </div>
            </div>


            <div className="container">
              {/* <a className="modal-trigger" href="#editEntry" id="edit-entry"></a> */}
              <div className="row">
                <div className="col s3"></div>
                <div className="col s9 modal-trigger" href="#editEntry" id="edit-entry">
                  <div id='canvas'>
                    {/* <!-- canvas here --> */}
                    <Canvas state={this.state} setAvail={this.setAvail}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id="nextMonthStorage" style="display:none"></div> */}
        <div id="nextMonthStorage"></div>
      </div>
    </Card>)
  }
}

export default Calendar;
