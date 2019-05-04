import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
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
            <Card className="goalsCard">
              <CardBody>
                <CardTitle>Daily Goals</CardTitle>
                <CardText>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                </CardText>
              </CardBody>
            </Card>
            <Card className="goalsCard">
              <CardBody>
                <CardTitle>Weekly Goals</CardTitle>
              </CardBody>
            </Card>
            <Card className="goalsCard">
              <CardBody>
                <CardTitle>Monthly Goals</CardTitle>
                <CardText>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                  <li>goals</li>
                </CardText>
              </CardBody>
            </Card>

          {/* <CardSubtitle className="panelSubtitle goalsSubtitle">subtitle</CardSubtitle>
          <CardText className="panelText goalsText">text</CardText> */}
        </CardBody>
      </Card>
    );
  }
}

export default Goals;
