import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "./main.css";

import API from "../../utils/API.js";

import Center from "./center/center";
import GoalsCard from "./goals/goalsCard";
import Tasks from "./tasks/tasks.js";
import Reminders from "./reminders/reminders";
import Timer from "./timer/timer"


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: "",
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
      list1title: "List 1",
      list1items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5"],
      list2title: "List 2",
      list2items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"]
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
          // set state of all items from the database, and last weather stored
          this.setState({
            location: res.data.location,
            tasks: res.data.tasks,
            reminders: res.data.reminders,
            list1title: res.data.list1title,
            list1items: res.data.list1items,
            list2title: res.data.list2title,
            list2items: res.data.list2items,
            timerSettings: {
              workInterval: res.data.timerSettings.workInterval,
              breakInterval: res.data.timerSettings.breakInterval,
              workCycles: res.data.timerSettings.workCycle
            }
          });
        }
    })
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <Container>
          <Row className="headerRow">
            <a href="/settings"><div className="headerBtn">Settings</div></a>
            <a href="/auth/logout"><div className="headerBtn">Log Out</div></a>
          </Row>
          <Row>
            <Col xs={3}>
              <Timer/>
            </Col>
            <Col xs={6}>
              <Row>
                <Center location={this.state.location}/>
              </Row>
              <Row>
                <Col xs={6}>
                  <GoalsCard listID="list1" title={this.state.list1title} items={this.state.list1items} />
                </Col>
                <Col xs={6}>
                  <GoalsCard listID="list2" title={this.state.list2title} items={this.state.list2items} />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Reminders reminders={this.state.reminders}/>
              <Tasks tasks={this.state.tasks}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;