import React from 'react';
import { Row, Col, Button, Modal } from 'react-materialize'

const CalDay = ({row, state, setAvail, date, monthName, isDisabled, availDate}) => {

  const availToggle = (e) => {
    let available
    let dayTime = e.target.id
    for (var i = 0; i < availDate.length; i++) {
      if (availDate[i].day === date) {
        switch (dayTime) {
          case "morning":
            if (availDate[i].morning) {
              available = false
            } else {
              available = true
            }
            setAvail(available,dayTime)
            break;
          default:
            if (availDate[i].afternoon) {
              available = false
            } else {
              available = true
            }
            setAvail(available,dayTime)
        }
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  let availability
  let cMonth = state.currentMonth+1
  let cYear = state.currentYear
  let arrId
  for (let i = 0; i < availDate.length; i++) {

    let day = parseInt(availDate[i].day)
    let month = parseInt(availDate[i].month)
    let year = parseInt(availDate[i].year)
    let morning = availDate[i].morning
    let afternoon = availDate[i].afternoon

    if (day === date && month === cMonth && year === cYear) {
      arrId = i
      if (morning && afternoon) {
        availability = "#b2ff59 light-green accent-2"
        } else if (morning) {
        availability = "#fff59d yellow lighten-3"
        } else if (afternoon) {
        availability = "#4fc3f7 light-blue lighten-2"
        } else {
        availability = ""
      }
    }
  }

  console.log("arrId",arrId);

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
        trigger={<Col s={1} className={`list-group-item ${availability}`} id={date}>{date}</Col>}>
          <form className="col s12 form center-align" id={"edit-form"}>
            <Row>
              <Col id="morning" onClick={availToggle} className={`card-panel ${state.available.morning ? availability : "blue-text text-darken-2"}`} s={6}>AM</Col>
              <Col id="afternoon" onClick={availToggle} className={`card-panel ${state.available.afternoon ? availability : "blue-text text-darken-2"}`} s={6}>PM</Col>
            </Row>

            <Row>
              <Col s={6}>{state.available.morning ? "Available":""}</Col>
              <Col s={6}>{state.available.afternoon ? "Available":""}</Col>
            </Row>

            <Row>
                <Button
                  className="modal-close waves-effect waves-light btn-large button-color" id="editSubmit" onSubmit={onSubmit}>Submit
                </Button>
            </Row>
          </form>
      </Modal>
    </div>
  )
}

export default CalDay
