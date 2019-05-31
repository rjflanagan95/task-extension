import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
      dueTime: this.state.inputTime
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

  expandTask(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div className="panel tasksPanel">
        <div className="panelBody tasksBody">
          <h4 className="panelTitle tasksTitle">Tasks</h4>
          <div className="panelList taskList">
            {this.props.tasks.map((val, index) =>
              <ExpansionPanel className="expandItem taskItem">
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <div className="expandHeader taskHeader">
                    <div className="expandTitle taskTitle">{val.title}</div>
                    {/* if we have a date and time is not default */}
                    { ((val.dueDate) && (val.dueTime)) ? (
                      <div className="dueInfo">
                        <div className="taskDueDate">{"Due " + moment(val.dueDate).format("MM/DD/YY") + " at " + val.dueTime}</div>
                      </div>
                    ) : (
                      // if we have a date but time is default
                      ((val.dueDate) && (!val.dueTime)) ? (
                        <div className="dueInfo">
                          <div className="taskDueDate">{"Due " + moment(val.dueDate).format("MM/DD/YY")}</div>
                        </div>
                      ) : (
                        // if we have no date but have time
                        ((!val.dueDate) && (val.dueTime)) ? (
                          <div className="dueInfo">
                            <div className="taskDueTime">{"Due at " + val.dueTime}</div>
                          </div>
                        ) : ("")))
                    }
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  { (val.steps) ? (
                    <div className="taskStepsField">
                      {val.steps.map((step, index) =>
                      <div className="taskStep" key={index}>
                        <input type="checkbox" className="stepCheckbox"></input>
                        <div className="stepText">{step}</div>
                      </div>
                      )}
                    </div>
                  ) : ("") }
                </ExpansionPanelDetails>
              </ExpansionPanel>
              // <Grid container className="panelBoxItem taskItem" key={index} onClick={this.expandTask}>
              //   <Grid item xs={5}>
              //     <div className="panelBoxTitle taskTitle">{val.title}</div>
              //   </Grid>
              //   <Grid item xs={3}>
              //     <div className="taskDueDate">{(val.dueDate) ? (moment(val.dueDate).format("MM-DD-YYYY")) : ("") }</div>
              //   </Grid>
              //   <Grid item xs={3}>
              //     <div className="taskDueTime">{(val.dueTime !== "--:-- --") ? (val.dueTime) : ("") }</div>
              //   </Grid>
              //   <Grid item xs={1}>
              //     <IconButton size="small" aria-label="Delete" className="panelBoxItemDeleteBtn removeTaskBtn" onClick={this.removeTask.bind(this, index)}>
              //     <DeleteIcon fontSize="small" />
              //   </IconButton>
              //   </Grid>
              // </Grid>
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
