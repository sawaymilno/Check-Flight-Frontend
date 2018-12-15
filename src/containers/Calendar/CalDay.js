import React from 'react';
import { Row, Col, Button, Modal } from 'react-materialize'




const CalDay = ({day, row, state, setAvail}) => {

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

  return (
    <div>

      <Modal
        className="center"
        header='Booking Availability'
        trigger={<Col s={1} className='list-group-item'>{day+(8*(row))}</Col>}>
        {/* <!-- edit entry modal --> */}

          <form className="col s12 form center-align" id="edit-form">
            <Row>
              <Col id="am" onClick={availToggle} className={`card-panel ${state.available.am ? "teal lighten-2" : "blue-text text-darken-2"}`} s={6}>AM</Col>
              <Col id="pm" onClick={availToggle} className={`card-panel ${state.available.pm ? "teal lighten-2" : "blue-text text-darken-2"}`} s={6}>PM</Col>
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
          {/* <a href="#!" className="modal-close nav-text red left align " id="editDelete">Delete</a>
          <a href="#!" className="modal-close nav-text right align">Close</a> */}



      </Modal>


</div>

  )
}

export default CalDay
