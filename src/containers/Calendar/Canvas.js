import React from 'react'
import { Col, Row } from 'react-materialize'
import CalRow from './CalRow'

const Canvas = ({state, setAvail}) => {
  let buildRows = [0,1,2,3,4]
  return (
    <div className='list-group-item'>
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
        return (<CalRow row={row} key={i} state={state} setAvail={setAvail} />)
      }
    )}
    </div>
  )
}

export default Canvas;
