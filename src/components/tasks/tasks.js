import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, FormGroup, Form, Input } from "reactstrap";
import "./tasks.css";
import TaskItem from "../taskItem/taskItem.js";

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

  expandTask(event) {
    event.preventDefault();


  }

  render() {
    return (
      <Card className="panel tasksPanel">
        <CardBody className="panelBody tasksBody">
          <CardTitle className="panelTitle tasksTitle">tasks</CardTitle>
          <div className="taskList">
            {this.state.tasks.map((val, index) => <TaskItem task={val} className="taskItem" key={index} onClick={this.expandTask}/>)}
          </div>
          <div className="inputBox">
            <Form>
              <FormGroup>
                <Input className="taskInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
                <Button size="sm" className="addTask" onClick={this.addTask}>+</Button>
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Tasks;
