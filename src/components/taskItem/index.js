import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";
import "./style.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    }
  }

  render() {
    return (
        <Card className="taskItem">
            <CardBody>
                <CardTitle className="taskTitle">{this.state.task}</CardTitle>
                <Button size="sm" className="removeTaskBtn">-</Button>
            </CardBody>
        </Card>
    );
  }
}

export default TaskItem;
