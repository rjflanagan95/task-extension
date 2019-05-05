import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      reminders: ["reminder 1", "reminder 2", "reminder 3"]
    }
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

  render() {

    return (
      <Card className="panel remindersPanel">
        <CardBody className="panelBody remindersBody">
          <CardTitle className="panelTitle remindersTitle">reminders</CardTitle>
          <CardSubtitle className="panelSubtitle remindersSubtitle">subtitle</CardSubtitle>
          <div className="reminderList">
            {this.state.reminders.map((val, index) => <li className="reminderItem" key={index}>{val}</li>)}
          </div>
          <div className="inputBox">
            <input className="reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
            <button className="addReminder" onClick={this.addReminder}>+</button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Reminders;
