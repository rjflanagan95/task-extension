import React, { Component } from "react";
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
          <img alt="pomodoro timer" className="timerImg" src={tomatoImg}/>
        </div>
      </div>
    );
  }
}

export default Timer;
