import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

import moment from "moment";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

  addStep(index, event) {
    event.preventDefault();
    
    let newStep = this.state.stepInput;
    let currentTasks = this.props.tasks;
    let steps = this.props.tasks[index].steps;

    steps.push(newStep);

    currentTasks.steps = steps;

    API.updateTasks(currentTasks)
    .then(res => {
      this.setState({
        inputTitle: '',
        inputDate: '',
        inputTime: "--:-- --",
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
        inputTime: "--:-- --",
        stepInput: ""
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
            {this.props.tasks.map((val, taskIndex) =>
              <ExpansionPanel className="expandItem taskItem" key={taskIndex}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <div className="taskHeader">
                    <div className="taskTitleDateTime">
                      <div className="expandTitle taskTitle">{val.title}</div>
                      {/* if we have a date and time */}
                      { ((val.dueDate) && (val.dueTime && (val.dueTime !== "--:-- --"))) ? (
                        <div className="dueInfo">
                          <div className="taskDueDate">{"Due " + moment(val.dueDate).format("MM/DD/YY") + " at " + val.dueTime}</div>
                        </div>
                      ) : (
                        // if we have a date but not time
                        ((val.dueDate) && (!val.dueTime || (val.dueTime === "--:-- --"))) ? (
                          <div className="dueInfo">
                            <div className="taskDueDate">{"Due " + moment(val.dueDate).format("MM/DD/YY")}</div>
                          </div>
                        ) : (
                          // if we have no date but have time
                          ((!val.dueDate) && (val.dueTime && (val.dueTime !== "--:-- --"))) ? (
                            <div className="dueInfo">
                              <div className="taskDueTime">{"Due at " + val.dueTime}</div>
                            </div>
                          ) : ("")))
                      }
                    </div>
                    <div className="removeTaskBtn">
                      <IconButton size="small" aria-label="Delete" onClick={this.removeTask.bind(this, taskIndex)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className="expandedTask">
                      { (val.steps) ? (
                        <div className="taskStepsField">
                          {val.steps.map((step, stepIndex) =>
                          <div className="taskStep" key={stepIndex}>
                            <IconButton size="small" aria-label="Delete" className="removeStepBtn" onClick={this.removeStep.bind(this, taskIndex, stepIndex)}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                            <input type="checkbox" className="stepCheckbox"></input>
                            <div className="stepText">{step}</div>
                          </div>
                          )}
                        </div>
                      ) : ("") }
                      <div className="stepInputForm">
                        <TextField className="stepInput" onChange={(e) => this.changeUserInput(e.target)} name="stepInput" value={this.state.stepInput} type="text"/>
                        <Button size="small" variant="outlined" className="addStepBtn" onClick={this.addStep.bind(this, taskIndex)}>add step</Button>
                      </div>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )}
          </div>
          <form className="taskForm">
            <div className="taskFormTop">
              <TextField required id="standard-required" label="task" defaultValue="task name" className="panelFormTextInput taskInput" onChange={(e) => this.changeUserInput(e.target)} name="inputTitle" value={this.state.inputTitle} type="text"/>
              <Fab size="small" color="primary" aria-label="Add" className="panelFormSubmit addTaskBtn "onClick={this.addTask}>
                <AddIcon />
              </Fab>
            </div>
            <div className="taskFormBottom">
              <TextField id="standard" defaultValue="" className="panelFormTextInput taskInput" onChange={(e) => this.changeUserInput(e.target)} name="inputDate" value={this.state.inputDate} type="date"/>
              <TextField id="time" type="time" defaultValue="--:-- --" className="inputTime" onChange={(e) => this.changeUserInput(e.target)} name="inputTime" value={this.state.inputTime} InputLabelProps={{shrink: true,}} inputProps={{
              step: 900, // 15 min
              }} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;
