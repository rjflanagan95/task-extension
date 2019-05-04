import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
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

  addTask(event) {
    event.preventDefault();
    console.log("hiya buddy");
    // chrome.storage.sync.set({"test": "test response"}, function() {
    //   chrome.storage.sync.get("test", function(items) {
    //     console.log(items);
    //   });
    // });
  }

  render() {
    return (
      <Card className="panel tasksPanel">
        <CardBody className="panelBody tasksBody">
          <CardTitle className="panelTitle tasksTitle">tasks</CardTitle>
          <CardSubtitle className="panelSubtitle tasksSubtitle">subtitle</CardSubtitle>
          <li className="panelText tasksText" onClick={this.addTask}>text</li>
          <li className="panelText tasksText" onClick={this.addTask}>text</li>
          <li className="panelText tasksText" onClick={this.addTask}>text</li>
        </CardBody>
      </Card>
    );
  }
}

export default Tasks;
