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
      location: "10003",
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
      list1: {
        title: "List 1",
        items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5"]
      },
      list2: {
        title: "List 2",
        items: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"]
      },
      weather: {
        city: "New York",
        temp: "72",
        temp_max: "75",
        temp_min: "70",
        description: "Rain"
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
            location: res.data.location,
            tasks: res.data.tasks,
            reminders: res.data.reminders,
            list1: {
              title: res.data.list1.title,
              items: res.data.list1.items
            },
            list2: {
              title: res.data.list2.title,
              items: res.data.list2.items
            },
            weather: res.data.weather
          });

          API.getWeather(this.state.location)
          .then(res => {
              this.setState({
                weather: res.data.weather
              });
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
                <Center location={this.state.location} weather={this.state.weather}/>
              </Row>
              <Row>
                <Col xs={6}>
                  <GoalsCard listID="list1" title={this.state.list1.title} items={this.state.list1.items} />
                </Col>
                <Col xs={6}>
                  <GoalsCard listID="list2" title={this.state.list2.title} items={this.state.list2.items} />
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