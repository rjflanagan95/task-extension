import React, { Component } from "react";
import "../main.css";
import "./center.css";
import { Row, Col } from "react-bootstrap";

import API from "../../../utils/API";

class Center extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // ZIP code
            location: "",
            time: "00:00",
            amPm: "AM",
            city: "",
            temp: "",
            temp_max: "",
            temp_min: "",
            description: ""
        }

        this.getTime = this.getTime.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    componentDidMount() {
        API.getUserData()
        .then(res => {
            this.setState({
                location: res.data.location
            })
        })

        this.getWeather();
        this.loadInterval = setInterval(this.getTime, 1000);
    }

    getTime() {
        setInterval(() => {
            let date, h, m, t, amPm;
        
            // get current time
            date = new Date();
            h = date.getHours();
            // if hours are 13-23 (for 12 hour clock display)
            if (h > 12) {
                h = h - 12;
            }

            m = date.getMinutes();
            // display minutes as "--:03"
            if (m < 10) {
                m = "0" + m;
            }

            t = `${h}:${m}`;
            
            // pm if hours > 12
            amPm = date.getHours() >= 12 ? "PM" : "AM";

            this.setState({
                time: t, 
                amPm: amPm
            });
        
        }, 1000);
    }

    getWeather() {
        // get new weather information
        API.getWeather(this.state.location)
        .then(res => {
          this.setState({
            city: res.data.weather.city,
            temp: res.data.weather.temp,
            temp_max: res.data.weather.temp_max,
            temp_min: res.data.weather.temp_min,
            description: res.data.weather.description
          });
        });
    }

    render() {
        return (
            <div className="panel">
                <div className="centerCard">
                    <Row>
                        <Col xs={12}>
                            <div className="centerClock">
                                <div>{this.state.time + " " + this.state.amPm}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="centerWeather">
                                <h5>{this.state.temp}<span>&#176;</span>F - {this.state.description} - {this.state.city}</h5>
                            </div>
                        </Col>
                    </Row>    
                </div>
            </div>
        )
    }
}

export default Center;