import React, { Component } from "react";
import "./reminders.css";
import API from "../../utils/API";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
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

    let currentReminders = this.props.reminders;
    let newReminder = this.state.userInput;

    currentReminders.push(newReminder);

    API.updateReminders(currentReminders)
    .then(res => {
      this.setState({
        userInput: ''
      });
    });
  }

  removeReminder(index) {
    let currentReminders = this.props.reminders;
    currentReminders.splice(index, 1);

    API.updateReminders(currentReminders)
    .then(res => {
      this.setState({
        userInput: ''
      });
    });
  }

  render() {

    return (
      <div className="panel remindersPanel">
        <div className="panelBody remindersBody">
          <div className="panelTitle remindersTitle">
            <text>Reminders</text>
          </div>
          <div className="panelList remindersList">
            {this.props.reminders.map((val, index) => 
            <div className="panelBoxItem reminderItem" key={index}>
              <text className="panelBoxTitle reminderTitle">{val}</text>
              <button className="panelBoxItemDeleteBtn removeReminderBtn" onClick={this.removeReminder.bind(this, index)}>DELETE REMINDER</button>
            </div>
            )}
          </div>
          <div className="panelForm reminderForm">
            <input type="text" id="standard" label="reminder" defaultValue="reminder" className="panelFormTextInput reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} />
            <button className="panelFormSubmit addReminder" onClick={this.addReminder}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Reminders;
