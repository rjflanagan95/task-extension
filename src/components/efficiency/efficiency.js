import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./efficiency.css";

class Efficiency extends Component {
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
      <Card className="panel efficiencyPanel">
        <CardBody className="panelBody efficiencyBody">
          <CardTitle className="panelTitle efficiencyTitle">efficiency</CardTitle>
          <CardSubtitle className="panelSubtitle efficiencySubtitle">subtitle</CardSubtitle>
          <CardText className="panelText efficiencyText">text</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Efficiency;
