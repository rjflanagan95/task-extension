import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputDate: ''
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  changeUserInput(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  addTask(event) {
    event.preventDefault();
    
    let newTask = {
      title: this.state.inputTitle,
      dueDate: this.state.inputDate
    }
    
    let currentTasks = this.props.tasks;

    currentTasks.push(newTask);

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: ''
      });
    });
  }

  removeTask(index, event) {
    event.preventDefault();

    let currentTasks = this.props.tasks;
    currentTasks.splice(index, 1);

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: ''
      });
    });
  }

  expandTask(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div className="panel tasksPanel">
        <div className="panelBody tasksBody">
          <h4 className="panelTitle tasksTitle">Tasks</h4>
          <div className="taskList">
            {this.props.tasks.map((val, index) =>
              <div className="taskItem" key={index} onClick={this.expandTask}>
                <div className="taskHeader">
                  <h4 className="taskTitle">{val.title}</h4>
                  <button size="sm" className="removeTaskBtn" onClick={this.removeTask.bind(this, index)}>-</button>
                </div>
                <span className="taskDueDate">{val.dueDate}</span>
                {/* {val.steps.map((step, index) =>
                  <div className="taskStep" key={index}>
                    <input type="checkbox"></input>
                    <h5 className="stepText">{step}</h5>
                  </div>
                )} */}
              </div>
            )}
          </div>
        </div>
        <div className="taskForm">
          <form>
            <input className="taskInput" onChange={(e) => this.changeUserInput(e.target)} name="inputTitle" value={this.state.inputTitle} type="text" placeholder="enter a task and due date"/>
            <input className="dateInput" onChange={(e) => this.changeUserInput(e.target)} name="inputDate" value={this.state.inputDate} type="date"/>
            <button size="sm" className="addTaskBtn" onClick={this.addTask}>+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;
