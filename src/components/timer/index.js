import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   title: this.props.title,
    //   subtitle: this.props.subtitle,
    //   text: this.props.text,
    //   githubLink: this.props.githubLink,
    //   hostLink: this.props.hostLink,
    //   image: this.props.image
    }
  }

  render() {

    return (
      <Card className="panel timerPanel">
        <CardBody className="panelBody timerBody">
          <CardTitle className="panelTitle timerTitle">timer</CardTitle>
          <CardSubtitle className="panelSubtitle timerSubtitle">subtitle</CardSubtitle>
          <CardText className="panelText timerText">text</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Timer;
