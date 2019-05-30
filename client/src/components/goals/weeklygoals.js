import React, { Component } from "react";
import "./goals.css";
import API from "../../utils/API";

class weeklyGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyGoalsInput: ''
    }

    this.addWeeklyGoal = this.addWeeklyGoal.bind(this);
  }

  changeUserInput(input) {
    this.setState({ weeklyGoalsInput: input})
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

  render() {

    return (
        <div className="goalsCard">
            <h4 className="goalsTitle panelTitle">Weekly Goals</h4>
            <div className="goalsList">
            {this.props.weeklyGoals.map((val, index) =>
                <li className="goalItem" key={index}>{val}</li>)}
            </div>
            <div className="goalsForm">
                <form>
                <input className="goalsInput" name="weeklyGoalsInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.weeklyGoalsInput} type="text"/>
                <button size="sm" className="addGoalBtn" onClick={this.addWeeklyGoal}>+</button>
                </form>
            </div>
        </div>
    );
  }
}

export default weeklyGoals;
