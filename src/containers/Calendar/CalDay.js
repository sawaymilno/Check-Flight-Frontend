import React from 'react';
import { Row, Col, Modal } from 'react-materialize'

const CalDay = ({row, state, postAvail, putAvail, date, monthName, isDisabled, availDate}) => {

  let availability
  let cMonth = state.currentMonth+1
  let cYear = state.currentYear
  let arrId

  if (availDate.length===0) {
    availDate = [{year: 2019, month: 12, day: 27, morning: false, afternoon: false},]
  }
  if (state.available.length===0) {
    state.available = [{date: "2017-12-27T00:00:00.000Z", morning: false, afternoon: false},]
  }
  // console.log('row',row,'date', date);
  // console.log('availDate', availDate);
  // console.log('state available',state.available);

  for (let i = 0; i < availDate.length; i++) {

    let day = availDate[i].day
    let month = availDate[i].month
    let year = availDate[i].year
    let morning = availDate[i].morning
    let afternoon = availDate[i].afternoon

    if (day === date && month === cMonth && year === cYear) {
      arrId = i;
      if (morning && afternoon) {
        availability = "#b2ff59 light-green accent-2";
      } else if (morning) {
        availability = "#fff59d yellow lighten-3";
      } else if (afternoon) {
        availability = "#4fc3f7 light-blue lighten-2";
      } else {
        availability = "";
      }
    }
  }

  let ith
  switch(date) {

    case 1:
      ith = "st";
      break;
    case 2:
      ith = "nd";
      break;
    case 3:
      ith = "rd";
      break;
    default:
      ith = "th";
  }

  const afternoonToggle = () => {
      let available
      let newAvail
      let modAvail
      let found = false
      for (let i = 0; i < availDate.length; i++) {
      let day = availDate[i].day
      let month = availDate[i].month
      let year = availDate[i].year

      if (day === date && month === cMonth && year === cYear) {

        if (!state.available[i].afternoon) {
          available = true
        } else {
          available = false
        }
       modAvail = state.available[i]
       modAvail.afternoon = available
        putAvail(modAvail)
        found = true
        break
      }
    }
        if (!found) {
          available = true
        newAvail = {
        year: cYear,
        month: cMonth,
        date: `${cYear}-${cMonth}-${date}`,
        morning: false,
        afternoon: available,
        }
        postAvail(newAvail)
      }
    }

  const morningToggle = () => {
      let available
      let newAvail
      let modAvail
      let found = false
      for (let i = 0; i < availDate.length; i++) {
        let month = availDate[i].month
        let year = availDate[i].year
        let day = availDate[i].day

        if (day === date && month === cMonth && year === cYear) {

          if (!state.available[i].morning) {
            available = true
          } else {
            available = false
          }
          modAvail = state.available[i]
          modAvail.morning = available
           putAvail(modAvail)
           found = true
           break
        }
      }
        if (!found) {
          available = true
        newAvail = {
          year: cYear,
          month: cMonth,
          date: `${cYear}-${cMonth}-${date}`,
          morning: available,
          afternoon: false,
        }
        postAvail(newAvail)
    }
  }
  let morning
  let afternoon

  if (state.available[arrId]) {
    morning = state.available[arrId].morning
    afternoon = state.available[arrId].afternoon
  } else {
    morning = false
    afternoon = false
  }



  return (
    <div>
      <Modal
        className="center"
        header={`${monthName} ${date}${ith} Booking Availability`}

        trigger={<Col  s={1} className={`list-group-item ${availability}`}>{date}</Col>}>
          <form className="col s12 form center-align" id="edit-form">
            <Row>

              <Col id="morning" onClick={morningToggle} className={`card-panel ${!morning ? "blue-text text-darken-2"  : availability }`} s={6}>AM</Col>

<Col id="afternoon" onClick={afternoonToggle} className={`card-panel ${!afternoon ? "blue-text text-darken-2"  : availability }`} s={6}>PM</Col>

            </Row>

            <Row>
              <Col s={6}>{!morning ? "" : "Available"}</Col>
              <Col s={6}>{!afternoon ? "" : "Available"}</Col>
            </Row>
          </form>

      </Modal>
    </div>
  );
};

export default CalDay;
