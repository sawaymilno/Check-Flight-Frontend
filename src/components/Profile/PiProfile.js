import React from "react";

import { Card, Icon, Button, Row, Input } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

const PiProfile = ({ currentUser, editToggle, isDisabled, logout, airports, putUser }) => {

const toggle = e => {
  editToggle(e);
};

const onSubmit = (e) => {
  e.preventDefault()
  let form = e.target
  let updatedUser = {
    //bio: form.bio.value,
    email: form.email.value,
    firstName: form.firstName.value,
    id: currentUser.id,
    isExaminer: currentUser.isExaminer,
    lastName: form.lastName.value,
    phone: form.phone.value,
    //rates: form.rate.value
    }
  putUser(updatedUser)
  toggle()
}

  return (
    <Card style={{ textAlign: "center" }}>
      <Card>
      <Icon large>account_circle</Icon>
      <h4>Pilot Profile</h4>
      <div style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Button
          style={{ width: "50%" }}
          onClick={toggle}
          className="col s2 m2 offset-m5 offset-s5 green accent-3"
          type="button">
          Edit Profile
        </Button>
      </div>
      <div >
      <form onSubmit={onSubmit}>
      <Row>
        <Input
          s={12}
          m={6}
          l={3}
          label="First Name" name="firstName"
          defaultValue={currentUser.firstName}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Last Name" name="lastName"
          defaultValue={currentUser.lastName}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Phone" name="phone"
          defaultValue={currentUser.phone}
          disabled={isDisabled}
        />
        <Input
          s={12}
          m={6}
          l={3}
          label="Email" name="email"
          defaultValue={currentUser.email}
          disabled={isDisabled}
        />
      </Row>
      {isDisabled ? null : (
        <Row>
      <Button
        className="col s2 m2 offset-m5 offset-s5 green accent-3"
        type="submit">
        Submit
        Changes
      </Button>
    </Row>
  )}
    </form>
  </div>
    </Card>
      <PilotSearchForm
        airports={airports}
      />
    </Card>
  );
};

export default PiProfile;
