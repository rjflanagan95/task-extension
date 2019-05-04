import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Goals extends Component {
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
      <Card className="panel goalsPanel">
        <CardBody className="panelBody goalsBody">
          <CardTitle className="panelTitle goalsTitle">Goals</CardTitle>
          <CardSubtitle className="panelSubtitle goalsSubtitle">subtitle</CardSubtitle>
          <CardText className="panelText goalsText">text</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Goals;
