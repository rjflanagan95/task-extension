import React, { Component } from "react";
import "./goals.css";
import API from "../../utils/API";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      dailyGoalsInput: '',
      weeklyGoalsInput: '',
      monthlyGoalsInput: '',
      goalTypes: ["Daily Goals", "Weekly Goals", "Monthly Goals"]
    }

    this.addGoal = this.addGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
  }

  changeUserInput(input, goalType) {
    if (goalType === "Daily Goals") {
      this.setState({
        dailyGoalsInput: input
      });
    } else if (goalType === "Weekly Goals") {
      this.setState({
        weeklyGoalsInput: input
      });
    } else if (goalType === "Monthly Goals") {
      this.setState({
        monthlyGoalsInput: input
      });
    }
  }

  addGoal(goalType, event) {
    event.preventDefault();

    if (goalType === "Daily Goals") {
      if (this.state.dailyGoalsInput !== "") {
        let currentDailyGoals = this.props.dailyGoals;
        let newDailyGoal = this.state.dailyGoalsInput;
        currentDailyGoals.push(newDailyGoal);

        API.updateDailyGoals(currentDailyGoals)
        .then(res => {
          this.setState({
            dailyGoalsInput: '',
          });
        });        
      }
    }
    else if (goalType === "Weekly Goals") {
      if (this.state.weeklyGoalsInput !== "") {
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
    }
    else if (goalType === "Monthly Goals") {
      if (this.state.monthlyGoalsInput !== "") {
        let currentMonthlyGoals = this.props.monthlyGoals;
        let newMonthlyGoal = this.state.monthlyGoalsInput;
    
        currentMonthlyGoals.push(newMonthlyGoal);
    
        API.updateMonthlyGoals(currentMonthlyGoals)
        .then(res => {
          this.setState({
            monthlyGoalsInput: ''
          });
        });        
      }
    }
  }

  removeGoal(itemIndex, goalType, event) {
    console.log("goal type: " + goalType);
    console.log("item index: " + itemIndex);
    event.preventDefault();

    if (goalType === "Daily Goals") {
      let currentDailyGoals = this.props.dailyGoals;
      currentDailyGoals.splice(itemIndex, 1);;

      API.updateDailyGoals(currentDailyGoals)
      .then(res => {
        this.setState({
          dailyGoalsInput: '',
        });
      });
    }
    else if (goalType === "Weekly Goals") {
      let currentWeeklyGoals = this.props.weeklyGoals;
      currentWeeklyGoals.splice(itemIndex, 1);;
  
      API.updateWeeklyGoals(currentWeeklyGoals)
      .then(res => {
        this.setState({
          weeklyGoalsInput: ''
        });
      });
    }
    else if (goalType === "Monthly Goals") {
      event.preventDefault();

      let currentMonthlyGoals = this.props.monthlyGoals;
      currentMonthlyGoals.splice(itemIndex, 1);
  
      API.updateMonthlyGoals(currentMonthlyGoals)
      .then(res => {
        this.setState({
          monthlyGoalsInput: ''
        });
      });
    }
  }

  render() {

    let dailyGoals = this.props.dailyGoals;
    let weeklyGoals = this.props.weeklyGoals;
    let monthlyGoals = this.props.monthlyGoals;

    let goals=[dailyGoals, weeklyGoals, monthlyGoals];
    let goalTypes = this.state.goalTypes;

    return (
      <div className="goalsBox">
        {goalTypes.map((goalType, typeIndex) =>
        <div className="panel goalsPanel" key={typeIndex}>
          <div className="panelTitle goalsTitle"><text>{goalType}</text></div>
          <div className="panelList goalsList">
            {goals[typeIndex].map((val, itemIndex) =>
              <div className="panelBoxItem goalItem" key={itemIndex}>
                <text className="panelBoxTitle goalTitle">{val}</text>
                <button className="panelBoxItemDeleteBtn removeGoalBtn" onClick={this.removeGoal.bind(this, itemIndex, goalType)}>-</button>
              </div>
            )}
          </div>
          <div className="panelForm goalsForm">
            <input type="text" id="standard" label="goal" defaultValue="goal" className="panelFormTextInput goalInput" onChange={(e) => this.changeUserInput(e.target.value, goalType)} value={ (goalType === "Daily Goals") ? (this.state.dailyGoalsInput) : ((goalType === "Weekly Goals") ? (this.state.weeklyGoalsInput) : (goalType === "Monthly Goals") ? (this.state.monthlyGoalsInput) : ("N/A")) } />
            <button className="panelFormSubmit addGoalBtn" onClick={this.addGoal.bind(this, goalType)}>+</button>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Goals;
