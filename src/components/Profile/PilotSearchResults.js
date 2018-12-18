import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, CollectionItem, Card, Button } from "react-materialize";

class PilotSearchResults extends Component {
  state = {
    examinerViewing: null
  }

  render () {
    console.log(this.props.airports)

    const filteredAirports = this.props.airports
      .filter(el => el.isChecked)
      .map((el, i) => (
        <Card key={el.id} title={"Examiners at " + el.name} actions={
          el.users.map((ex, i) => (
            <div key={i}>
                <CollectionItem href="#" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ examinerViewing: ex })
                }}>
                  {ex.firstName + " " + ex.lastName}
                </CollectionItem>
                <hr />
              </div>
            ))
        } />
      ));

    return this.state.examinerViewing ?
    <Row>
    {this.state.examinerViewing.firstName}
    <Button type="button" onClick={() => {
      this.setState({ examinerViewing: null })
    }}>Back</Button>
    </Row>
    : <Row>{filteredAirports}</Row>
  }
}

export default PilotSearchResults;
