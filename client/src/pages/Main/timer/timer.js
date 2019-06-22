import React, { Component } from "react";
import tomatoImg from "./tomato.png";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workInterval: 1,
      breakInterval: 5,
      count: 0,
      timerMinutes: "00",
      timerSeconds: "00",
      timerStatus: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    clearInterval(this.timer);
    this.setState({
      timerStatus: true,
      count: this.state.workInterval * 60,
    });

    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  tick() {
    let minutesDiv = this.state.count % (60 * 60);
    let minutes = Math.floor(minutesDiv / 60);
    if (minutes < 10) { minutes = "0" + minutes }
    let secondsDiv = minutesDiv % (60);
    let seconds = Math.ceil(secondsDiv);
    if (seconds < 10) { seconds = "0" + seconds }
    if (seconds === 0) { seconds = "00" }
    console.log(seconds);

    this.setState({
      count: this.state.count - 1,
      timerMinutes: minutes,
      timerSeconds: seconds
    });

    if (this.state.count === 0) {
      clearInterval(this.timer);
      
      this.setState({
        timerStatus: false,
        timerMinutes: "00",
        timerSeconds: "00"
      })
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      count: 0,
      timerMinutes: "00",
      timerSeconds: "00",
      timerStatus: false
    })
  }


  render() {

    return (
      <div className="panel timerPanel">
        <div className="panelBody timerBody">
          <img alt="pomodoro timer" className="timerImg" src={tomatoImg}/>
          <div>{this.state.timerMinutes}:{this.state.timerSeconds}</div>
          <button onClick={this.startTimer}>Start Timer</button>
          <button onClick={this.stopTimer}>Stop Timer</button>
        </div>
      </div>
    );
  }
}

export default Timer;
