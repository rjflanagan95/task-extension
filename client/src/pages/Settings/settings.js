import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API.js";
import "../Main/main.css";
import "./settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      zipInput: "",
      list1title: "",
      title1input: "",
      list2title: "",
      title2input: "",
      workInterval: "",
      workIntervalInput: "",
      breakInterval: "",
      breakIntervalInput: "",
      workCycles: "",
      workCyclesInput: ""
    }

    this.changeZIP = this.changeZIP.bind(this);
    this.changeList1 = this.changeList1.bind(this);
    this.changeList2 = this.changeList2.bind(this);
    this.updateTimerSettings = this.updateTimerSettings.bind(this);
  }

  componentDidMount() {
    API.getUserData()
      .then(res => {
        // if no response from API, force the user to log in
        if (!res) {
          return <Redirect to="/login"/>
        }
        // otherwise set the state to data from the database
        else {
          this.setState({
            location: res.data.location,
            zipInput: "",
            list1title: res.data.list1title,
            title1input: "",
            list2title: res.data.list2title,
            title2input: "",
            workInterval: res.data.timerSettings.workInterval,
            breakInterval: res.data.timerSettings.breakInterval,
            workCycles: res.data.timerSettings.workCycles,
          });
        }
    }).catch(err => console.log(err));
  }

  changeUserInput(target) {
    this.setState({
      [target.name] : target.value
    });
  }

  changeZIP() {
    let newZIP = this.state.zipInput;

    // will need to add better ZIP validation
    if (newZIP !== "") {
      API.changeZIP(newZIP)
      .then(res => {
        this.setState({
          location: res.data.location,
          zipInput: ''
        });
      })
    }
  }

  changeList1() {
    let newTitle = this.state.title1input;

    if (newTitle !== "") {
      API.changeList1(newTitle)
      .then(res => {
        this.setState({
          list1title: res.data.list1title,
          title1input: ''
        });
      })
    }
  }

  changeList2() {
    let newTitle = this.state.title2input;

    if (newTitle !== "") {
      API.changeList2(newTitle)
      .then(res => {
        this.setState({
          list2title: res.data.list2title,
          title2input: ''
        });
      })
    }
  }

  updateTimerSettings() {
    let newWorkInterval, newBreakInterval, newWorkCycles;

    (this.state.workIntervalInput === "" ? (newWorkInterval = this.state.workInterval) : (newWorkInterval = this.state.workIntervalInput));
    (this.state.breakIntervalInput === "" ? (newBreakInterval = this.state.breakInterval) : (newBreakInterval = this.state.breakIntervalInput));
    (this.state.workCyclesInput === "" ? (newWorkCycles = this.state.workCycles) : (newWorkCycles = this.state.workCyclesInput));

    let newTimerSettings = {
      workInterval: parseInt(this.state.workIntervalInput, 10),
      breakInterval: parseInt(this.state.breakIntervalInput, 10),
      workCycles: parseInt(this.state.workCyclesInput, 10)
    }

    API.updateTimerSettings(newTimerSettings)
    .then(res => {
      this.setState({
        workInterval: res.data.timerSettings.workInterval,
        breakInterval: res.data.timerSettings.breakInterval,
        workCycles: res.data.timerSettings.workCycles,
        workIntervalInput: "",
        breakIntervalInput: "",
        workCyclesInput: ""
      });
    })
  }

  render() {
    return (
      <Container>
        <Row className="headerRow">
          <a href="/"><div className="headerBtn">Home</div></a>
          <a href="/auth/logout"><div className="headerBtn">Log Out</div></a>
        </Row>
        <Row>
          <Col xs={4}>
            <div className="changePanel">
              <div className="changeItem">
                <div>Current ZIP (Weather): {this.state.location}</div>
                <input className="panelFormTextInput" placeholder="new ZIP" name="zipInput" value={this.state.zipInput} onChange={(e) => this.changeUserInput(e.target)}/><button className="changeFormSubmit" onClick={this.changeZIP}>Update</button>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="changePanel">
              <div className="changeItem">
                <div>Current Title: {this.state.list1title}</div>
                <input className="panelFormTextInput" placeholder="new list name" name="title1input" value={this.state.title1input} onChange={(e) => this.changeUserInput(e.target)}/>
                <button className="changeFormSubmit" onClick={this.changeList1}>Update</button>
              </div>
              <div className="changeItem">
                <div>Current Title: {this.state.list2title}</div>
                <input className="panelFormTextInput" placeholder="new list name" name="title2input" value={this.state.title2input} onChange={(e) => this.changeUserInput(e.target)}/>
                <button className="changeFormSubmit" onClick={this.changeList2}>Update</button>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="changePanel">
              <div className="changeItem">
                <div>Work Interval: {this.state.workInterval}</div>
                <input type="number" min="1" max="59" className="panelFormTextInput timerSettingsInput" name="workIntervalInput" value={this.state.workIntervalInput} onChange={(e) => this.changeUserInput(e.target)}/>

                <div>Break Interval: {this.state.breakInterval}</div>
                <input type="number" min="1" max="59"  className="panelFormTextInput timerSettingsInput" name="breakIntervalInput" value={this.state.breakIntervalInput} onChange={(e) => this.changeUserInput(e.target)}/>

                <div>Work Cycles: {this.state.workCycles}</div>
                <input type="number" min="1" max="8"  className="panelFormTextInput timerSettingsInput" name="workCyclesInput" value={this.state.workCyclesInput} onChange={(e) => this.changeUserInput(e.target)}/>
                <button className="changeFormSubmit" onClick={this.updateTimerSettings}>Update</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Settings;
