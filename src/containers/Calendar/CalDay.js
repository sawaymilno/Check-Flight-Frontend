import React from 'react';
import { Row, Col, Button, Modal } from 'react-materialize'

const CalDay = ({row, state, setAvail, date, monthName, isDisabled}) => {

const availToggle = (e) => {
  let available
  let dayTime = e.target.id

  switch (dayTime) {
    case "am":
      if (state.available.am) {
        available = false
      } else {
        available = true
      }
      setAvail(available,dayTime)
      break;
    default:
      if (state.available.pm) {
        available = false
      } else {
        available = true
      }
      setAvail(available,dayTime)
  }
}

let availability
let am = state.available.am
let pm = state.available.pm
if (am && pm) {
  availability = "#ba68c8 purple lighten-2"
  } else if (am) {
  availability = "#fff9c4 yellow lighten-4"
  } else if (pm) {
  availability = "#ffebee red lighten-5"
  } else {
  availability = ""
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
    ith = "th"
}


  return (
    <div>
      <Modal
        className="center"
        header={`${monthName} ${date}${ith} Booking Availability`}
        trigger={<Col s={1} className={`list-group-item ${availability}`}>{date}</Col>}>
          <form className="col s12 form center-align" id="edit-form">
            <Row>
              <Col id="am" onClick={availToggle} className={`card-panel ${state.available.am ? availability : "blue-text text-darken-2"}`} s={6}>AM</Col>
              <Col id="pm" onClick={availToggle} className={`card-panel ${state.available.pm ? availability : "blue-text text-darken-2"}`} s={6}>PM</Col>
            </Row>

            <Row>
              <Col s={6}>{state.available.am ? "Available":""}</Col>
              <Col s={6}>{state.available.pm ? "Available":""}</Col>
            </Row>

            <Row>
                <Button
                  className="modal-close waves-effect waves-light btn-large button-color" id="editSubmit">Submit
                </Button>
            </Row>
          </form>
      </Modal>
    </div>
  )
}

export default CalDay
