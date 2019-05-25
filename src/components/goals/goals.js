import React, { Component } from "react";
import "./goals.css";

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   title: this.props.title,
    //   subtitle: this.props.subtitle,
    //   text: this.props.text,
    //   githubLink: this.props.githubLink,
    //   hostLink: this.props.hostLink,
    //   image: this.props.image
    }
  }

  render() {

    return (
      <div className="panel goalsPanel">
          <div className="goalsCard">
            <h4 className="goalsTitle">Daily Goals</h4>
            <div className="goalsList">
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
            </div>
          </div>
          <div className="goalsCard">
            <h4 className="goalsTitle">Weekly Goals</h4>
            <div className="goalsList">
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
            </div>
          </div>
          <div className="goalsCard">
            <h4 className="goalsTitle">Monthly Goals</h4>
            <div className="goalsList">
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
              <li>goals</li>
            </div>
            </div>
      </div>
    );
  }
}

export default Goals;
