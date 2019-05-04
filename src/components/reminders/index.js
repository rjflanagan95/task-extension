import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Reminders extends Component {
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
      <Card className="panel remindersPanel">
        <CardBody className="panelBody remindersBody">
          <CardTitle className="panelTitle remindersTitle">reminders</CardTitle>
          <CardSubtitle className="panelSubtitle remindersSubtitle">subtitle</CardSubtitle>
          <CardText className="panelText remindersText">text</CardText>
          <CardText className="panelText remindersText">text</CardText>
          <CardText className="panelText remindersText">text</CardText>
          <CardText className="panelText remindersText">text</CardText>
          <CardText className="panelText remindersText">text</CardText>
          <CardText className="panelText remindersText">text</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Reminders;
