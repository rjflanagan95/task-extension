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
            list1title: res.data.list1title,
            list1items: res.data.list1items,
            list2title: res.data.list2title,
            list2items: res.data.list2items
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
                <Center />
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
              <Reminders />
              <Tasks />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;