import React, { Component } from "react";
import "./reminders.css";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }

    this.addReminder = this.addReminder.bind(this);
    this.removeReminder = this.removeReminder.bind(this);
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addReminder(event) {
    event.preventDefault();

    let currentReminders = this.props.reminders;
    let newReminder = this.state.userInput;

    currentReminders.push(newReminder);

    API.updateReminders(currentReminders)
    .then(res => {
      this.setState({
        userInput: ''
      });
    });
  }

  removeReminder(index) {
    let currentReminders = this.props.reminders;
    currentReminders.splice(index, 1);

    API.updateReminders(currentReminders)
    .then(res => {
      this.setState({
        userInput: ''
      });
    });
  }

  render() {

    return (
      <div className="panel remindersPanel">
        <div className="panelBody remindersBody">
          <Paper className="panelTitle remindersTitle"><Typography variant="h6">Reminders</Typography></Paper>
          <div className="panelList remindersList">
            {this.props.reminders.map((val, index) => 
            <Paper className="panelBoxItem reminderItem" key={index}>
              <Typography variant="subtitle1" className="panelBoxTitle reminderTitle">{val}</Typography>
              <IconButton size="small" aria-label="Delete" className="panelBoxItemDeleteBtn removeReminderBtn" onClick={this.removeReminder.bind(this, index)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Paper>
            )}
          </div>
        </div>
        <Paper className="panelForm reminderForm">
          <TextField type="text" required id="standard-required" label="reminder" defaultValue="reminder" className="panelFormTextInput reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} />
          <Fab size="small" color="primary" aria-label="Add" className="panelFormSubmit addReminder" onClick={this.addReminder}>
            <AddIcon />
          </Fab>
        </Paper>
      </div>
    );
  }
}

export default Reminders;
