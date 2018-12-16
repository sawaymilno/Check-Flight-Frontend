import React from "react";
import {Row, Input, Card, Button} from "react-materialize";
import Calendar from "../../containers/Calendar/Calendar"

const ExProfile = ({editToggle, isDisabled, onchange, date}) => {

  const bio = "That's a son of a gun of a cloud. Isn't it great to do something you can't fail at? Talent is a pursued interest. That is to say, anything you practice you can do. And right there you got an almighty cloud. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Maybe there's a little something happening right here. Working it up and down, back and forth. Here's another little happy bush I get carried away with this brush cleaning. Trees cover up a multitude of sins. We don't have to be concerned about it. We just have to let it fall where it will. Give him a friend, we forget the trees get lonely too. That is when you can experience true joy, when you have no fear. Get tough with it, get strong."

  const toggle = (e) => {
    editToggle(e)
  }

  return (
    <Card>
      <Card>
        <Row>
          <h4 className="col s12 m3 ">Examiner Profile</h4>
          <Button onClick={toggle} className="green accent-3 col s12 m1 right" type="submit">EDIT</Button>
        </Row>
        <Row >
          <Input s={12} m={6} l={3} label="First Name" value="Shawn" disabled={isDisabled}/>
          <div className="col l1"></div>
          <Input s={12} m={6} l={3} label="Last Name" value="Milne" disabled={isDisabled}/>
          <div className="col m3 l1"></div>
          <Input s={12} m={6} l={3} label="Phone" value="978-290-1692" disabled={isDisabled}/>
        </Row>
        <Row >
          <Input s={12} m={6} l={3} label="Email" value="Shawn.M.Milne@gmail.com" disabled={isDisabled}/>
          <div className="col l3"></div>
          <Input s={12} m={6} l={3} label="Rate" value="$800" disabled={isDisabled}/>
        </Row>
        <Row>
          <Input s={12} label="Bio" type='textarea' value={bio} disabled={isDisabled}/>
        </Row>

        <Card>
          <h4 className="col s12 m9 ">Airports</h4>
          <Row>
            <Input name='group1' type='checkbox' value='red' label='Red'/>
            <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked'/>
            <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked'/>
            <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled'/>
            <Input name='group1' type='checkbox' value='red' label='Red'/>
            <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked'/>
            <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked'/>
            <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled'/>
            <Input name='group1' type='checkbox' value='red' label='Red'/>
            <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked'/>
            <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked'/>
            <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled'/>
            <Input name='group1' type='checkbox' value='red' label='Red'/>
            <Input name='group1' type='checkbox' value='yellow' label='Yellow' defaultValue='checked'/>
            <Input name='group1' type='checkbox' value='green' label='Green' className='filled-in' defaultChecked='checked'/>
          </Row>
        </Card>

        <Calendar/> {
          isDisabled
            ? null
            : <Row>
                <Button onClick={toggle} className="col s2 m2 offset-m5 offset-s5 green accent-3" type="submit">Submit Changes</Button>
              </Row>
        }

      </Card>
    </Card>)
};

export default ExProfile;
