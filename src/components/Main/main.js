import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Goals from "../goals/goals.js";
import Tasks from "../tasks/tasks.js";
import Efficiency from "../efficiency/efficiency";
import Reminders from "../reminders/reminders";
import Timer from "../timer/timer"
import "./main.css";

import Panel from "../panel/panel";

class Main extends Component {
  state = {
    
  }

  render() {

    return (
      <Container className="contentArea">
        <Row>
    
          <Col className="column-1">
            <Goals className="panel"></Goals>
            <Efficiency className="panel"></Efficiency>
          </Col>

          <Col className="column-2">
            <Tasks className="panel"></Tasks>
            <Reminders className="panel"></Reminders>
            {/* <Timer className="panel"></Timer> */}
            <Panel className="panel"></Panel>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Main;
