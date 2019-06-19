import React, { Component } from "react";
import "./goals.css";
import GoalsCard from "./goalsCard";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {

    return (
      <div className="goalsBox">
        <GoalsCard items={this.props.list1.items} title={this.props.list1.title} />
        <GoalsCard items={this.props.list2.items} title={this.props.list2.title} />
      </div>
    );
  }
}

export default Goals;
