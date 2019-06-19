import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

import API from "../../utils/API.js";

import Center from "./center/center";
import GoalsCard from "./goals/goalsCard";
import Tasks from "./tasks/tasks.js";
import Reminders from "./reminders/reminders";
import Timer from "./timer/timer"
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
      monthlyGoals: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"],
      list1: {
        title: "List 1",
        items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5"]
      },
      list2: {
        title: "List 2",
        items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"]
      }
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
          list1: res.data.lists.list1,
          // lists: {
            // list1: {
              // title: '',
              // items: []
            // }
          // }
          list2: res.data.lists.list2
        });
        }

    }).catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <a href="/auth/logout"><div className="logoutBtn">Log Out</div></a>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Timer />
            </Col>
            <Col xs={6}>
              <Row>
                <Center />
              </Row>
              <Row>
                <Col xs={6}>
                  <GoalsCard title={this.state.list1.title} items={this.state.list1.items} />
                </Col>
                <Col xs={6}>
                  <GoalsCard title={this.state.list2.title} items={this.state.list2.items} />
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