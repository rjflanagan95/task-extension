import React, { Component } from "react";
import "./goals.css";
import API from "../../utils/API";

class monthlyGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthlyGoalsInput: ''
    }

    this.addMonthlyGoal = this.addMonthlyGoal.bind(this);
  }

  changeUserInput(input) {
    this.setState({ monthlyGoalsInput: input})
  }

  addMonthlyGoal(event) {
    event.preventDefault();

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

  render() {

    return (
      <div className="goalsCard">
        <h4 className="goalsTitle panelTitle">Monthly Goals</h4>
        <div className="goalsList">
        {this.props.monthlyGoals.map((val, index) =>
            <li className="goalItem" key={index}>{val}</li>)}
        </div>
        <div className="goalsForm">
          <form>
            <input className="goalsInput" name="monthlyGoalsInput" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.monthlyGoalsInput} type="text"/>
            <button size="sm" className="addGoalBtn" onClick={this.addMonthlyGoal}>+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default monthlyGoals;
