import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Tasks extends Component {
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
      <Card className="panel tasksPanel">
        <CardBody className="panelBody tasksBody">
          <CardTitle className="panelTitle tasksTitle">tasks</CardTitle>
          <CardSubtitle className="panelSubtitle tasksSubtitle">subtitle</CardSubtitle>
          <CardText className="panelText tasksText">text</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Tasks;
