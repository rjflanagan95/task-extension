import React, { Component } from "react";
import "./timer.css";
import tomatoImg from "./tomato.png";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="panel timerPanel">
        <div className="panelBody timerBody">
          {/* <h2 className="panelTitle timerTitle">test Title</h2>
          <h4 className="panelSubtitle timerSubtitle">test subtitle</h4>
          <p className="panelText timerSubtitle">test text</p> */}
          <img alt="pomodoro timer" className="timerImg" src={tomatoImg}/>
        </div>
      </div>
    );
  }
}

export default Timer;
