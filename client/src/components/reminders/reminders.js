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
          <h4 className="panelTitle remindersTitle">Reminders</h4>
          <div className="remindersList">
            {this.props.reminders.map((val, index) => 
              <div key={index} className="reminderItem">
                <div>
                  <h4 className="reminderTitle">{val}</h4>
                  <button size="sm" className="removeReminderBtn" onClick={this.removeReminder.bind(this, index)}>-</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="reminderForm">
          <form>
            <input className="reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
            <button size="sm" className="addReminder" onClick={this.addReminder}>+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Reminders;
