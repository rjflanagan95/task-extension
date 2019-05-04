import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Goals from "../goals/index.js";
import Tasks from "../tasks/index.js";
import Efficiency from "../efficiency/index.js";
import Reminders from "../reminders/index.js";
import Timer from "../timer/index.js"
import "./style.css";

class Main extends Component {
  state = {
    
  }


  render() {

    return (
      <Container className="contentArea">
        <Row>
          <Col>
            <Goals className="panel"></Goals>
            <Efficiency className="panel"></Efficiency>
          </Col>
          <Col>
            <Tasks className="panel"></Tasks>
            <Reminders className="panel"></Reminders>
            <Timer className="panel"></Timer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
