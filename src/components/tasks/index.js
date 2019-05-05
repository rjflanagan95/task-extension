import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./style.css";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      tasks: ["task 1", "task 2", "task 3"]
    }

    this.addTask = this.addTask.bind(this);
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addTask(event) {
    event.preventDefault();
    console.log("hiya buddy");

    let currentTasks = this.state.tasks;
    let newTask = this.state.userInput;

    currentTasks.push(newTask);

    this.setState({
      userInput: '',
      tasks: currentTasks
    });

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
          <div className="taskList">
            {this.state.tasks.map((val, index) => <li className="taskItem" key={index}>{val}</li>)}
          </div>
          <div className="inputBox">
            <input className="taskInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
            <button className="addTask" onClick={this.addTask}>+</button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Tasks;
