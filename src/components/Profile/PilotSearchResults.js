import React, { Component } from "react";
import { Row, CollectionItem, Card, Button, Icon } from "react-materialize";

class PilotSearchResults extends Component {
  state = {
    examinerViewing: null
  };

  render() {
    console.log(this.props.airports);

    const filteredAirports = this.props.airports
      .filter(el => el.isChecked)
      .map((el, i) => (
        <Card
          key={el.id}
          title={"Examiners at " + el.name}
          actions={el.users.map((ex, i) => (
            <div key={i}>
              <CollectionItem
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ examinerViewing: ex });
                }}
              >
                {ex.firstName + " " + ex.lastName}
              </CollectionItem>
              <hr />
            </div>
          ))}
        />
      ));

    return this.state.examinerViewing ? (
      <Row>
        <Card>
          <Icon large>account_circle</Icon>
          <div>
            <h3>
              {this.state.examinerViewing.firstName +
                " " +
                this.state.examinerViewing.lastName}
            </h3>
            <h5>
              <Icon>phone</Icon>&nbsp;
              {this.state.examinerViewing.phone.replace(/^(\d{3})(\d{3})(\d{4})$/, `(${'$1'}) ${'$2'}-${'$3'}`)}
            </h5>
            <h5>
              <Icon>email</Icon>&nbsp;
              {this.state.examinerViewing.email}
            </h5>
            <h5>
              <Icon>monetization_on</Icon>&nbsp;
              {this.state.examinerViewing.rates}
            </h5>
          </div>
          <Button
            style={{ width: "50%" }}
            className="green accent-3"
            type="button"
            onClick={() => {
              this.setState({ examinerViewing: null });
            }}
          >
            Back
          </Button>
        </Card>
      </Row>
    ) : (
      <Row>{filteredAirports}</Row>
    );
  }
}

export default PilotSearchResults;
