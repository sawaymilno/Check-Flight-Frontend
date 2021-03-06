import React from 'react'
import { Col, Row } from 'react-materialize'
import CalRow from './CalRow'

const Canvas = ({state, postAvail, putAvail, cTime, cMonth, monthName, isDisabled}) => {
  let buildRows = [0,1,2,3,4,5]
  let available=state.available
  let availDate = available.map((available, i) => {
    let sliced = available.date.slice(0,10)
    let dArr = sliced.split("-")
    return ({
      year: parseInt(dArr[0]),
      month: parseInt(dArr[1]),
      day: parseInt(dArr[2]),
      morning:available.morning,
      afternoon:available.afternoon,
      id: available.id,
    })
  })
  return (
    <div  className='list-group-item col s12 offset-s2'>
      <Row className="bold">
        <Col s={1}>Su</Col>
        <Col s={1}>M</Col>
        <Col s={1}>T</Col>
        <Col s={1}>W</Col>
        <Col s={1}>Th</Col>
        <Col s={1}>F</Col>
        <Col s={1}>Sa</Col>
      </Row>
      {buildRows.map((row, i) => {
        return (<CalRow row={row} key={i} state={state} postAvail={postAvail} putAvail={putAvail} cTime={cTime} cMonth={cMonth} monthName ={monthName} isDisabled={isDisabled} availDate={availDate} />)
      }
    )}
    </div>
  )
}

export default Canvas;
