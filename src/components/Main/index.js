import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

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
        <Row className="contentRow">
          <Col>
            <Goals className="panel"></Goals>
          </Col>
          <Col>
            <Tasks className="panel"></Tasks>
          </Col>
        </Row>
        <Row className="contentRow">
          <Col>
            <Efficiency className="panel"></Efficiency>
          </Col>
          <Col>
            <Reminders className="panel"></Reminders>
            <Timer className="panel"></Timer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
