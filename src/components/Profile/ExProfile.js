import React from "react";
import { Row, Input, Card, Button, Icon } from "react-materialize";
import Calendar from "../../containers/Calendar/Calendar";

const ExProfile = ({
  editToggle,
  currentUser,
  isDisabled,
  airports,
  avails,
  updateExaminer,
  examAirports
}) => {

//console.log("BEFORE new state in Exprofile",examAirports)
//console.log("BEFORE airports in Exprofile",airports);
//console.log("BEFORE checkedAirports in Exprofile",checked);
const toggle = () => {
      editToggle();
    };

  const onSubmit = e => {
    e.preventDefault();
    let form = e.target;
    let updatedUser = {
      bio: form.bio.value,
      email: form.email.value,
      firstName: form.firstName.value,
      id: currentUser.id,
      isExaminer: currentUser.isExaminer,
      lastName: form.lastName.value,
      phone: form.phone.value,
      rates: form.rate.value

    };

    let nodesArray = [].slice.call(document.querySelectorAll("input"));
    let filteredAirports = nodesArray.filter(airport => airport.checked);
    let selectedAirports = filteredAirports.map(airport => parseInt(airport.id));
    let updatedAirports = { airports: selectedAirports };

    updateExaminer(updatedUser, updatedAirports);
    editToggle();
  };

  let checkedAirports = airports.map(airport => {
    for (let i = 0; i < examAirports.length; i++) {
      if (airport.id === examAirports[i]) {
        airport.checked = true;
        break;
      } else {
        airport.checked = false;
      }
    }
    return airport;
  });

// let checked = checkedAirports.map(airport => {
//   return airport.checked
// })

//console.log("AFTER checkedAirports in Exprofile",checked);
  //console.log("AFTER new state in Exprofile ",examAirports)
  //console.log("AFTER airports in Exprofile",airports);
// console.log("THIS IS THE CHECKED AIRPORTS", checkedAirports);
//console.log("IS CHECKED TRUE[0]",checkedAirports[0].checked);

  return (
    <Card>
      <Card style={{ textAlign: "center" }}>
        <Card>
          <Icon large>account_circle</Icon>
          <h4>Examiner Profile</h4>
          <div
            style={{ display: "flex", justifyContent: "center", margin: "1em" }}>
            <Button
              style={{ width: "50%" }}
              onClick={toggle}
              className="green accent-3 col s12 m1 right">
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
        <Card>
          <div onSubmit={onSubmit}>
            <form>
              <Row>
                <Input
                  s={12}
                  m={6}
                  l={3}
                  label="First Name"
                  name="firstName"
                  defaultValue={currentUser.firstName}
                  disabled={isDisabled}/>
                <Input
                  s={12}
                  m={6}
                  l={3}
                  label="Last Name"
                  name="lastName"
                  defaultValue={currentUser.lastName}
                  disabled={isDisabled}/>
                <Input
                  s={12}
                  m={6}
                  l={3}
                  label="Phone"
                  name="phone"
                  defaultValue={currentUser.phone}
                  disabled={isDisabled}/>
                <Input
                  s={12}
                  m={6}
                  l={3}
                  label="Email"
                  name="email"
                  defaultValue={currentUser.email}
                  disabled={isDisabled}/>
                <Input
                  s={12}
                  m={6}
                  l={3}
                  label="Rate"
                  name="rate"
                  defaultValue={currentUser.rates}
                  disabled={isDisabled}/>
                <Input
                  s={12}
                  label="Bio"
                  type="textarea"
                  name="bio"
                  defaultValue={currentUser.bio}
                  disabled={isDisabled}/>
              </Row>
              <Card>
                <h4 className="col s12 m9 ">Airports</h4>
                <Row>
                  {checkedAirports.map((airport, i) => {
                    let id = airport.id.toString();
                    return (
                      <Input
                        s={4}
                        m={2}
                        name="airport"
                        type="checkbox"
                        key={i}
                        id={id}
                        label={airport.code}
                        checked={airport.checked}
                        disabled={isDisabled}
                      />
                    );
                  })}
                </Row>
              </Card>
              {isDisabled ? null : (
                <Row>
                  <Button
                    className="col s2 m2 offset-m5 offset-s5 green accent-3"
                    type="submit"
                  >
                    Submit Changes
                  </Button>
                </Row>
              )}
            </form>
          </div>
        </Card>
      </Card>
        <Calendar isDisabled={isDisabled} avails={avails} currentUser={currentUser} />
      </Card>
    </Card>
  );
};

export default ExProfile;
