import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

import API from "../../utils/API";

import Goals from "../goals/goals.js";
import Tasks from "../tasks/tasks.js";
import Reminders from "../reminders/reminders";
import Timer from "../timer/timer"
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
        title: "Default Task 1",
        dueDate: "6/15/2019",
        dueTime: "12:30 PM",
        steps: ["step 1", "step 2", "step 3"]
        }, {
        title: "Default Task 2",
        dueDate: "6/25/2019",
        dueTime: "07:30 PM",
        steps: ["step 1", "step 2", "step 3"]
        }
      ],
      reminders: ["Default Reminder 1", "Default Reminder 2"],
      dailyGoals: ["Goal 1", "Goal 2", "Goal 3"],
      weeklyGoals: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5"],
      monthlyGoals: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"]
      }
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
          tasks: res.data.tasks,
          reminders: res.data.reminders,
          dailyGoals: res.data.dailyGoals,
          weeklyGoals: res.data.weeklyGoals,
          monthlyGoals: res.data.monthlyGoals
        });
        }

    }).catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <Row className="headerRow">
          <Col>
            <a href="/auth/logout"><div className="logoutBtn">Log Out</div></a>
          </Col>
        </Row>
        <Container className="contentArea">
          <Row className="row-1">
            <Col>
              <Goals className="panel" dailyGoals={this.state.dailyGoals} weeklyGoals={this.state.weeklyGoals} monthlyGoals={this.state.monthlyGoals} />
            </Col>
          </Row>
          <Row className="row-2">
            <Col>
              <Reminders className="panel" reminders={this.state.reminders}></Reminders>
            </Col>
            <Col>
              <Tasks className="panel" tasks={this.state.tasks}></Tasks>
            </Col>
            <Col>
              <Timer className="panel"></Timer>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;