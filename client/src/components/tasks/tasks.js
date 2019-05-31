import React, { Component } from "react";
import "./tasks.css";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
          <div className="panelList taskList">
            {this.props.tasks.map((val, index) =>
              <Grid container className="panelBoxItem taskItem" key={index} onClick={this.expandTask}>
                <Grid item xs={6}>
                  <div className="panelBoxTitle taskTitle">{val.title}</div>
                  {/* <div className="taskDueDate">{val.dueDate}</div> */}
                </Grid>
                <Grid item xs={4}>
                  <div className="taskDueDate">{val.dueDate}</div>
                </Grid>
                <Grid item xs={2}>
                  <IconButton size="small" aria-label="Delete" className="panelBoxItemDeleteBtn removeTaskBtn" onClick={this.removeTask.bind(this, index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                </Grid>
              </Grid>
              /* {val.steps.map((step, index) =>
                <div className="taskStep" key={index}>
                  <input type="checkbox"></input>
                  <h5 className="stepText">{step}</h5>
                </div>
              )} */
            )}
          </div>
          <form className="panelForm taskForm">
            <TextField required id="standard-required" label="task" defaultValue="task name" className="panelFormTextInput taskInput" margin="normal" onChange={(e) => this.changeUserInput(e.target)} name="inputTitle" value={this.state.inputTitle} type="text"
            />

            <Fab size="small" color="primary" aria-label="Add" className="panelFormSubmit addTaskBtn "onClick={this.addTask}>
              <AddIcon />
            </Fab>
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;
