import React, { Component } from "react";
import "./tasks.css";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      tasks: ["task 1", "task 2", "task 3"]
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
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

  removeTask(index, event) {
    event.preventDefault();

    let currentTasks = this.state.tasks;
    currentTasks.splice(index, 1);

    this.setState({
      tasks: currentTasks
    });
  }

  expandTask(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div className="panel tasksPanel">
        <div className="panelBody tasksBody">
          <h4 className="panelTitle tasksTitle">tasks</h4>
          <div className="taskList">
            {this.state.tasks.map((val, index) =>
              <div className="taskItem" key={index} onClick={this.expandTask}>
                <h4 className="taskTitle">{val}</h4>
                <button size="sm" className="removeTaskBtn" onClick={this.removeTask.bind(this, index)}>-</button>
              </div>
            )}
          </div>
        </div>
        <div className="taskForm">
          <form>
            <input className="taskInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} type="text"/>
            <button size="sm" className="addTaskBtn" onClick={this.addTask}>+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;
