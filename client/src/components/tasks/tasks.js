import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
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

    // let currentTasks = this.state.tasks;
    // let newTask = this.state.userInput;

    // currentTasks.push(newTask);
    // // instead of changing the state, add the new task to the array and update the DB, then refresh props + state

    // this.setState({
    //   userInput: '',
    //   tasks: currentTasks
    // });


    // API.addTask(newTask);
  }

  removeTask(index, event) {
    event.preventDefault();

    // let currentTasks = this.state.tasks;
    // currentTasks.splice(index, 1);

    // this.setState({
    //   tasks: currentTasks
    // });
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
            {this.props.tasks.map((val, index) =>
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
