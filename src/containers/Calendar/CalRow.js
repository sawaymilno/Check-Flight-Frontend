import React from 'react';
import { Row } from 'react-materialize'
import CalDay from './CalDay'

const CalRow = ({state, setAvail, row, cTime, cMonth, monthName}) => {

  let daysOfWeek = [1,2,3,4,5,6,7]
  let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let cNum = cTime.getDay()

  return (
    <Row className='list-group-item'>
      {daysOfWeek.map((day, i) => {
        return (<CalDay key={i} state={state} setAvail={setAvail} row={row} date={(day+(7*row)<=cNum||(day+(7*row)>daysInMonths[cMonth]+cNum)) ? "" : (day+(7*row))-cNum} monthName={monthName} />)
        }
      )}
    </Row>
  )
};

export default CalRow;
