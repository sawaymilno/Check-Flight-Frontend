import React from "react";

import PilotSearchResults from "./PilotSearchResults";
import { Card, Icon, Button, Row, Input } from "react-materialize";
import PilotSearchForm from "./PilotSearchForm";

// const PilotProfile = props => {
//   const toggle = e => {
//     props.editToggle(e);
//   };

//   return <Card style={{ textAlign: "center" }}>
//       <Icon large>account_circle</Icon>
//       <h4>Pilot Profile</h4>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Button style={{ width: "70%" }} onClick={toggle} className="green accent-3 col s12 m1 right" type="submit">
//           EDIT
//         </Button>
//         <br />
//         <br />
//         <br />
//       </div>
//       <Row>
//         <Input s={12} m={6} l={3} label="First Name" defaultValue="Shawn" disabled={props.isDisabled} />
//         <Input s={12} m={6} l={3} label="Last Name" defaultValue="Milne" disabled={props.isDisabled} />
//         <Input s={12} m={6} l={3} label="Phone" defaultValue="978-290-1692" disabled={props.isDisabled} />
//         <Input s={12} m={6} l={3} label="Email" defaultValue="Shawn.M.Milne@gmail.com" disabled={props.isDisabled} />
//       </Row>
//       <br />
//       <Row>
//         <PilotSearchForm />
//       </Row>
//       <br />
//     </Card>;
// };
const PilotProfile = props => (
  <Card style={{ textAlign: "center" }}>
    <Icon large>account_circle</Icon>
    <h4 style={{ textAlign: "center" }}>Brett Bloxom</h4>
    <h5>Boulder, CO</h5>
    <Button
      style={{ width: "70%" }}
      className="green accent-3"
      onClick={props.isEditing}
    >
      Edit Profile
    </Button>
    <br />
    <br />
    <PilotSearchForm searched={props.searched} airports={props.airports} />
    <br />
  </Card>
);

export default PilotProfile;
