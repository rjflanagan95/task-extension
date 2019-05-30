import React, { Component } from "react";
import "./goals.css";
import API from "../../utils/API";

class dailyGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dailyGoalsInput: '',
    }

    this.addDailyGoal = this.addDailyGoal.bind(this);
  }

  changeUserInput(input) {
    this.setState({ dailyGoalsInput: input})
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

  render() {

    return (
        <div className="goalsCard">
            <h4 className="goalsTitle panelTitle">Daily Goals</h4>
            <div className="goalsList">
                {this.props.dailyGoals.map((val, index) =>
                <li className="goalItem" key={index}>{val}</li>)}
            </div>
            <div className="dailyGoalsForm">
                <form>
                <input className="goalsInput" name="dailyGoalsInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.dailyGoalsInput} type="text"/>
                <button size="sm" className="addGoalBtn" onClick={this.addDailyGoal}>+</button>
                </form>
            </div>
        </div>
    );
  }
}

export default dailyGoals;
