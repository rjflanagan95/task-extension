import React, { Component } from "react";
import API from "../../../utils/API";
import { Row, Col } from "react-bootstrap";

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      reminders: ["Default Reminder 1", "Default Reminder 2"]
    }

    this.addReminder = this.addReminder.bind(this);
    this.removeReminder = this.removeReminder.bind(this);
  }

  componentDidMount() {
    API.getUserData()
    .then(res => {
        this.setState({
            reminders: res.data.reminders
        })
    })
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addReminder(event) {
    event.preventDefault();

    if (this.state.userInput !== "") {
      let currentReminders = this.state.reminders;
      let newReminder = this.state.userInput;

      currentReminders.push(newReminder);

      API.updateReminders(currentReminders)
      .then(res => {
        this.setState({
          userInput: ''
        });
      });
    }
  }

  removeReminder(index) {
    let currentReminders = this.state.reminders;
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
      <div className="panel">
        <div className="panelBody">
          <div className="panelTitle">
            <div>Reminders</div>
          </div>
          <div className="panelList">
            {this.state.reminders.map((val, index) => 
            <div className="panelBoxItem" key={index}>
              <Row>
                <Col xs={9}>
                  <div className="panelBoxTitle">{val}</div>
                </Col>
                <Col xs={3}>
                  <button className="panelBoxItemDeleteBtn" onClick={this.removeReminder.bind(this, index)}>-</button>
                </Col>
              </Row>
            </div>
            )}
          </div>
          <div className="panelForm">
            <Row>
              <Col xs={9}>
                <input type="text" id="standard" label="reminder" className="panelFormTextInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} />
              </Col>
              <Col xs={3}>
                <button className="panelFormSubmit" onClick={this.addReminder}>+</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Reminders;
