import React, { Component } from "react";
import "./tasks.css";
import API from "../../../utils/API";
import { Row, Col } from "react-bootstrap";

import moment from "moment";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      inputDate: '',
      inputTime: '',
      stepInput: ''
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
    
    if (this.state.inputTitle !== "") {
      let newTask = {
        title: this.state.inputTitle,
        dueDate: this.state.inputDate,
        dueTime: this.state.inputTime,
      }
      
      let currentTasks = this.props.tasks;

      currentTasks.push(newTask);

      API.updateTasks(currentTasks)
      .then(res => {
        this.setState({
          inputTitle: '',
          inputDate: '',
          inputTime: "--:-- --"
        });
      });      
    }
  }

  removeTask(index, event) {
    event.preventDefault();

    let currentTasks = this.props.tasks;
    currentTasks.splice(index, 1);

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: '',
        inputTime: "--:-- --"
      });
    });
  }

  addStep(taskIndex, event) {
    event.preventDefault();
    
    let newStep = this.state.stepInput;
    let currentTasks = this.props.tasks;
    let currentSteps = currentTasks[taskIndex].steps;

    currentSteps.push(newStep);

    currentTasks.steps = currentSteps;

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: '',
        inputTime: "",
        stepInput: ""
      });
    });
  }

  removeStep(taskIndex, stepIndex, event) {
    event.preventDefault();

    let currentTasks = this.props.tasks;
    let currentSteps = currentTasks[taskIndex].steps;
    currentSteps.splice(stepIndex, 1);

    currentTasks.steps = currentSteps;

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: '',
        inputTime: "HH:MM",
        stepInput: ""
      });
    });
  }

  render() {
    return (
      <div className="panel">
        <div className="panelBody">
          <div className="panelTitle"><div>Tasks</div></div>
          <div className="panelList taskList">
            {this.props.tasks.map((val, taskIndex) =>
              <div className="taskItem" key={taskIndex}>
                <Row>
                  {/* left side, for task title and due date information */}
                  <Col xs={9}>
                    {/* task title */}
                    <Row>
                      <Col xs={12}>
                        <div>{val.title}</div>
                      </Col>
                    </Row>
                    {/* task due date and due time */}
                    <Row>
                      <Col xs={12} className="dueInfo">
                        {/* if we have a date and time */}
                        { ((val.dueDate) && (val.dueTime && (val.dueTime !== "--:-- --"))) ? (
                          <div>
                            <div>{"Due " + moment(val.dueDate).format("MM/DD/YY") + " at " + val.dueTime}</div>
                          </div>
                        ) : (
                          // if we have a date but not time
                          ((val.dueDate) && (!val.dueTime || (val.dueTime === "--:-- --"))) ? (
                            <div>
                              <div>{"Due " + moment(val.dueDate).format("MM/DD/YY")}</div>
                            </div>
                          ) : (
                            // if we have no date but have time
                            ((!val.dueDate) && (val.dueTime && (val.dueTime !== "--:-- --"))) ? (
                              <div>
                                <div>{"Due at " + val.dueTime}</div>
                              </div>
                            ) : ("")))
                        }
                      </Col>
                    </Row>
                  </Col>

                  {/* right side, for delete button */}
                  <Col xs={3}>
                    <button className="taskDeleteBtn" onClick={this.removeTask.bind(this, taskIndex)}>-</button>
                  </Col>
                </Row>

                {/* <div className="taskDetails">
                  { (val.steps) ? (
                    <div className="taskStepsList">
                      {val.steps.map((step, stepIndex) =>
                      <div className="taskStep" key={stepIndex}>
                        <button className="panelBoxItemDeleteBtn removeStepBtn" onClick={this.removeStep.bind(this, taskIndex, stepIndex)}>-</button>
                        <input type="checkbox" className="stepCheckbox"></input>
                        <div className="stepdiv">{step}</div>
                      </div>
                      )}
                    </div>
                  ) : ("") }
                  <div className="stepInputForm">
                    <input className="panelFormdivInput stepInput" onChange={(e) => this.changeUserInput(e.target)} name="stepInput" value={this.state.stepInput} type="div"/>
                    <button className="panelFormSubmit addStepBtn" onClick={this.addStep.bind(this, taskIndex)}>+</button>
                  </div>
                </div> */}
              </div>
            )}
          </div>
          <div className="taskForm">
            <Row>
              <Col xs={12}>
                <input id="standard" label="task" className="panelFormdivInput taskInput" onChange={(e) => this.changeUserInput(e.target)} name="inputTitle" value={this.state.inputTitle} type="div"/>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <input id="standard" className="panelFormdivInput inputDate" onChange={(e) => this.changeUserInput(e.target)} name="inputDate" value={this.state.inputDate} type="date"/></Col>
            </Row>
            <Row>
              <Col xs={9}>
                {/* step 900 = 15 minutes */}
                <input id="time" type="time" className="panelFormdivInput inputTime" onChange={(e) => this.changeUserInput(e.target)} name="inputTime" value={this.state.inputTime} inputlabelprops={{shrink: true,}} inputprops={{step: 900}} />
              </Col>
              <Col xs={3}>
                <button className="panelFormSubmit addTaskBtn " onClick={this.addTask}>+</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
