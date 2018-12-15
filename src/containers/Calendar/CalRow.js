import React from 'react';
import { Row } from 'react-materialize'
import CalDay from './CalDay'

const CalRow = ({state, setAvail, row}) => {

  let daysOfWeek = [1,2,3,4,5,6,7]



  return (
    <Row className='list-group-item'>
      {daysOfWeek.map((day, i) => {
        return (<CalDay key={i} day={day} state={state} setAvail={setAvail} row={row} />)
      }
    )}
  </Row>
  )
};

export default CalRow;
