import React, { Component } from "react";
import "./reminders.css";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
          <h4 className="panelTitle remindersTitle">Reminders</h4>
          <div className="panelList remindersList">
            {this.props.reminders.map((val, index) => 
            <Grid container className="panelBoxItem reminderItem" key={index}>
              <Grid item xs={9}>
                <h4 className="panelBoxTitle reminderTitle">{val}</h4>
              </Grid>
              <Grid item xs={3}>
                <IconButton size="small" aria-label="Delete" className="panelBoxItemDeleteBtn removeReminderBtn" onClick={this.removeReminder.bind(this, index)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
            )}
          </div>
        </div>
        <form className="panelForm reminderForm">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField type="text" required id="standard-required" label="Required" defaultValue="reminder" className="panelFormTextInput reminderInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} />
            </Grid>
            <Grid item>
            <Fab size="small" color="primary" aria-label="Add" className="panelFormSubmit addReminder" onClick={this.addReminder}>
                  <AddIcon />
                </Fab>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Reminders;
