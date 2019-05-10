import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from "reactstrap";
import "./reminders.css";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      reminders: ["reminder 1", "reminder 2", "reminder 3"]
    }

    this.addReminder = this.addReminder.bind(this);
    this.removeReminder = this.removeReminder.bind(this);
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addReminder(event) {
    event.preventDefault();
    console.log("hiya buddy");

    let currentReminders = this.state.reminders;
    let newReminder = this.state.userInput;

    currentReminders.push(newReminder);

    this.setState({
      userInput: '',
      reminders: currentReminders
    });

  }

  removeReminder(index) {
    console.log(index)

    let currentReminders = this.state.reminders;
    currentReminders.splice(index, 1);

    this.setState({
      reminders: currentReminders
    })
  }

  render() {

    return (
      <Card className="panel remindersPanel">
        <CardBody className="panelBody remindersBody">
          <CardTitle className="panelTitle remindersTitle">reminders</CardTitle>
          <div className="reminderList">
            {this.state.reminders.map((val, index) => 
              <Card key={index} className="reminderItem">
                <CardBody>
                    <CardTitle className="reminderTitle">{val}</CardTitle>
                    <Button size="sm" className="removeReminderBtn" onClick={this.removeReminder.bind(this, index)}>-</Button>
                </CardBody>
              </Card>
            )}
          </div>
          <div className="inputBox">
            <Form>
              <FormGroup>
                <Input className="reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
              <Button size="sm" className="addReminder" onClick={this.addReminder}>+</Button>
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Reminders;
