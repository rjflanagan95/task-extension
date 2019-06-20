import React, { Component } from "react";

class Center extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.location,
            time: "00:00",
            amPm: "AM"
        }

        this.getTime = this.getTime.bind(this);
    }

    componentDidMount() {
        this.loadInterval = setInterval(this.getTime, 1000);
    }

    getTime() {
        setInterval(() => {
            let date, h, m, t, amPm;
        
            date = new Date();
            h = date.getHours();
            if (h > 12) {
                h = h - 12;
            } else if (h < 10) {
                h = "0" + h;
            }

            m = date.getMinutes();
            if (m < 10) {
                m = "0" + m;
            }

            t = `${h}:${m}`;
            
            amPm = date.getHours() >= 12 ? "PM" : "AM";

            this.setState({
                time: t, 
                amPm: amPm
            });
        
        }, 1000);
    }

    render() {
        return (
            <div className="panel">
                <div className="centerClock">
                    <h2>{this.state.time + " " + this.state.amPm}</h2>
                </div>
                <div className="centerWeather">
                    <h5>68, Mostly cloudy. - {this.state.location}</h5>
                </div>
            </div>
        )
    }
}

export default Center;