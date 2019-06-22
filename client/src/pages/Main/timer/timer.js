import "./timer.css";
import React, { Component } from "react";
import tomatoImg from "./tomato.png";
import { Row, Col } from "react-bootstrap";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workInterval: 25,
      breakInterval: 5,
      workCycles: 4,
      count: 0,
      timerMinutes: "00",
      timerSeconds: "00",
      timerStatus: false,
      showTomato: true,
      pomodoroStatus: "..."
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.showTimer = this.showTimer.bind(this);
    this.workCycle = this.workCycle.bind(this);
    this.breakCycle = this.breakCycle.bind(this);
  }

  componentDidMount() {
    this.setState({
      workInterval: this.props.settings[0],
      breakInterval: this.props.settings[1],
      workCycles: this.props.settings[2]
    })
  }

  // start the timer after the start button is clicked
  startTimer() {
    clearInterval(this.workTimer);
    clearInterval(this.breakTimer);

    this.setState({
      timerStatus: true
    });

    // begin the first work cycle
    this.workCycle();
  }

  // counts seconds remaining on the clock
  tick() {
    // parsing minutes and seconds
    let newCount = this.state.count - 1;
    let minutesDiv = newCount % (60 * 60);
    let minutes = Math.floor(minutesDiv / 60);
    let secondsDiv = minutesDiv % (60);
    let seconds = Math.ceil(secondsDiv);

    // formatting for display
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }
    if (seconds === 0) { seconds = "00" }

    // update clock
    this.setState({
      count: newCount,
      timerMinutes: minutes,
      timerSeconds: seconds
    });

    // if the timer is up... otherwise the timer will proceed to the next tick
    if (this.state.count === 0) {
      if (this.state.pomodoroStatus === "working...") {
        clearInterval(this.workTimer);
      } else if (this.state.pomodoroStatus === "on a break...") {
        clearInterval(this.breakTimer);
      }

      this.setState({
        timerStatus: false,
        timerMinutes: "00",
        timerSeconds: "00"
      });

      this.cycleCheck();
    }
  }

  stopTimer() {
    clearInterval(this.workTimer);
    clearInterval(this.breakTimer);

    this.setState({
      count: 0,
      timerMinutes: "00",
      timerSeconds: "00",
      timerStatus: false,
      workCycles: 4,
      breakCycles: 3,
      pomodoroStatus: "..."
    })
  }

  workCycle() {
    this.setState({
      pomodoroStatus: "working...",
      count: this.state.workInterval * 60
    });

    this.workTimer = setInterval(this.tick.bind(this), 1000);
  }

  breakCycle() {
    this.setState({
      pomodoroStatus: "on a break...",
      count: this.state.breakInterval * 60
    });

    this.breakTimer = setInterval(this.tick.bind(this), 1000);
  }

  cycleCheck() {
    if (this.state.pomodoroStatus === "working...") {
      clearInterval(this.workTimer);
      this.setState({
        workCycles: this.state.workCycles - 1
      });

      // if the number of work cycles are over, stop the timer
      if (this.state.workCycles === 0) {
        this.stopTimer()
        this.setState({
          showTomato: true
        });
        // otherwise proceed to the next break cycle
      } else {
        this.breakCycle();
      }

    } else if (this.state.pomodoroStatus === "on a break...") {
      clearInterval(this.breakTimer);

      this.workCycle();
    }
  }

  showTimer() {
    this.setState({
      showTomato: false
    });
  }


  render() {

    return (
      <div className="panel">
        <div className="panelBody">
          {(this.state.showTomato) ? (
            <img alt="pomodoro timer" className="timerImg" src={tomatoImg} onClick={this.showTimer}/>
          ) : (
            <div className="timerPanel">
              <Row>
                <Col className="timerRow">
                  <div className="statusPanel">
                    <Row><Col><div className="statusText">{this.state.pomodoroStatus}</div></Col></Row>
                    <Row><Col><div className="statusText">{this.state.timerMinutes}:{this.state.timerSeconds}</div></Col></Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="timerRow">
                  <button onClick={this.startTimer} className="timerBtn">Start</button>
                  <button onClick={this.stopTimer} className="timerBtn">Stop</button>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Timer;
