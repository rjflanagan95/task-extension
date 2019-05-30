import React, { Component } from "react";
import "./goals.css";
import API from "../../utils/API";

import DailyGoals from "./dailygoals";
import WeeklyGoals from "./weeklygoals";
import MonthlyGoals from "./monthlygoals";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyGoalsInput: '',
      weeklyGoalsInput: '',
      monthlyGoalsInput: ''
    }
  }

  changeUserInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  addDailyGoal(event) {
    event.preventDefault();

    let currentDailyGoals = this.props.dailyGoals;
    let newDailyGoal = this.state.dailyGoalsInput;

    currentDailyGoals.push(newDailyGoal);

    API.updateDailyGoals(currentDailyGoals)
    .then(res => {
      this.setState({
        dailyGoalsInput: ''
      });
    });
  }

  addWeeklyGoal(event) {
    event.preventDefault();

    let currentWeeklyGoals = this.props.weeklyGoals;
    let newWeeklyGoal = this.state.weeklyGoalsInput;

    currentWeeklyGoals.push(newWeeklyGoal);

    API.updateWeeklyGoals(currentWeeklyGoals)
    .then(res => {
      this.setState({
        weeklyGoalsInput: ''
      });
    });
  }

  addMonthlyGoal(event) {
    event.preventDefault();

    let currentMonthlyGoals = this.props.monthlyGoals;
    let newMonthlyGoal = this.state.monthlyGoalsInput;

    currentMonthlyGoals.push(newMonthlyGoal);

    API.updateGoals(currentMonthlyGoals)
    .then(res => {
      this.setState({
        monthlyGoalsInput: ''
      });
    });
  }

  render() {

    return (
      <div className="panel goalsPanel">
        <DailyGoals dailyGoals={this.props.dailyGoals} />
        <WeeklyGoals weeklyGoals={this.props.weeklyGoals} />
        <MonthlyGoals monthlyGoals={this.props.monthlyGoals} />
      </div>
    );
  }
}

export default Goals;
