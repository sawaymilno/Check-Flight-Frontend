import React from "react";
import { Row, Input, Card, Button, Icon } from "react-materialize";
import Calendar from "../../containers/Calendar/Calendar";

const ExProfile = ({ editToggle, state, logout }) => {
  // const bio =
  //   "That's a son of a gun of a cloud. Isn't it great to do something you can't fail at? Talent is a pursued interest. That is to say, anything you practice you can do. And right there you got an almighty cloud. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Maybe there's a little something happening right here. Working it up and down, back and forth. Here's another little happy bush I get carried away with this brush cleaning. Trees cover up a multitude of sins. We don't have to be concerned about it. We just have to let it fall where it will. Give him a friend, we forget the trees get lonely too. That is when you can experience true joy, when you have no fear. Get tough with it, get strong.";
  const isDisabled = state.isDisabled
  const toggle = e => {
    editToggle(e);
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
            EDIT PROFILE
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
            defaultValue={state.users.firstName}
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Last Name"
            defaultValue={state.users.lastName}
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Phone"
            defaultValue={state.users.phone}
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Email"
            defaultValue={state.users.email}
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Rate"
            defaultValue={state.users.rates}
            disabled={isDisabled}
          />

          <Input
            s={12}
            label="Bio"
            type="textarea"
            defaultValue={state.users.bio}
            disabled={isDisabled}
          />
        </Row>
        <Card>
          <h4 className="col s12 m9 ">Airports</h4>
          <Row>
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={true} disabled={isDisabled} />
            <Input name="group1" type="checkbox" value="red" label="Red" checked={false} disabled={isDisabled} />
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
