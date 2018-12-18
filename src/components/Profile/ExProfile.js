import React from "react";
import { Row, Input, Card, Button, Icon } from "react-materialize";
import Calendar from "../../containers/Calendar/Calendar";

const ExProfile = ({ editToggle, currentUser, isDisabled }) => {
  const toggle = () => {
    editToggle();
  };

  return (
    <Card>
      <Card style={{ textAlign: "center" }}>
        <Icon large>account_circle</Icon>
        <h4>Examiner Profile</h4>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1em" }}
        >
          <Button
            style={{ width: "50%" }}
            onClick={toggle}
            className="green accent-3 col s12 m1 right"
            type="submit"
          >
            Edit Profile
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1em" }}
        >
          <br />
          <br />
          <br />
        </div>
        <Row>
          <Input
            s={12}
            m={6}
            l={3}
            label="First Name"
            defaultValue={currentUser.firstName}
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Last Name"
            defaultValue={currentUser.lastName}
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Phone"
            defaultValue={currentUser.phone}
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Email"
            defaultValue={currentUser.email}
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Rate"
            defaultValue={currentUser.rates}
            disabled={isDisabled}
          />

          <Input
            s={12}
            label="Bio"
            type="textarea"
            defaultValue={currentUser.bio}
            disabled={isDisabled}
          />
        </Row>
        <Card>
          <h4 className="col s12 m9 ">Airports</h4>
          <Row>
            {this.props.airports.map((airport, i) => {
              return (
                <Input s={4} m={2} name="group1" type="checkbox" key={i} label={airport.code} checked={false} disabled={isDisabled} />
              )
            })}

          </Row>
        </Card>
        <Calendar isDisabled={isDisabled} />
        {isDisabled ? null : (
          <Row>
            <Button
              onClick={toggle}
              className="col s2 m2 offset-m5 offset-s5 green accent-3"
              type="submit"
            >
              Submit Changes
            </Button>
          </Row>
        )}
      </Card>
    </Card>
  );
};

export default ExProfile;
