import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

import API from "../../utils/API";

import Goals from "../goals/goals.js";
import Tasks from "../tasks/tasks.js";
import Efficiency from "../efficiency/efficiency";
import Reminders from "../reminders/reminders";
import Timer from "../timer/timer"
import "./main.css";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        {
        title: "Default Task 1",
        dueDate: "6/15/2019",
        dueTime: "12:30 PM",
        steps: ["step 1", "step 2", "step 3"]
        }, {
        title: "Default Task 2",
        dueDate: "6/25/2019",
        dueTime: "07:30 PM",
        steps: ["step 1", "step 2", "step 3"]
        }
      ],
      reminders: ["Default Reminder 1", "Default Reminder 2"],
      dailyGoals: ["Goal 1", "Goal 2", "Goal 3"],
      weeklyGoals: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5"],
      monthlyGoals: ["Goal 1", "Goal 2", "Goal 3", "Goal 4", "Goal 5", "Goal 6", "Goal 7"]
      }
  }

  componentDidMount() {

    API.getUserData()
      .then(res => {
        // if no response from API, force the user to log in
        if (!res) {
          return <Redirect to="/login"/>
        }
        // otherwise set the state to data from the database
        else {
          this.setState({
          tasks: res.data.tasks,
          reminders: res.data.reminders,
          dailyGoals: res.data.dailyGoals,
          weeklyGoals: res.data.weeklyGoals,
          monthlyGoals: res.data.monthlyGoals
        });
        }

    }).catch(err => console.log(err));
  }

  render() {

    return (
      <Container className="contentArea">
        <Box className="headerRow">
          <a href="auth/logout">
            <Button variant="contained" className="logoutBtn">
              Log Out
            </Button>
          </a>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Goals className="panel" dailyGoals={this.state.dailyGoals} weeklyGoals={this.state.weeklyGoals} monthlyGoals={this.state.monthlyGoals} />
            <Efficiency className="panel"></Efficiency>
          </Grid>
          <Grid item xs={4}>
            <Tasks className="panel" tasks={this.state.tasks}></Tasks>
            <Reminders className="panel" reminders={this.state.reminders}></Reminders>
            <Timer className="panel"></Timer>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Main;