import React, { Component } from "react";
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

    let currentReminders = this.state.reminders;
    currentReminders.splice(index, 1);

    this.setState({
      reminders: currentReminders
    })
  }

  render() {

    return (
      <div className="panel remindersPanel">
        <div className="panelBody remindersBody">
          <h4 className="panelTitle remindersTitle">reminders</h4>
          <div className="remindersList">
            {this.state.reminders.map((val, index) => 
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
