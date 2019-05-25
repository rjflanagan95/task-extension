import React, { Component } from "react";
import "./taskItem.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task
    }
  }

  render() {
    return (
      <div className="taskItem">
        <h4 className="taskTitle">{this.state.task}</h4>
        <button size="sm" className="removeTaskBtn">-</button>
      </div>
    );
  }
}

export default TaskItem;
