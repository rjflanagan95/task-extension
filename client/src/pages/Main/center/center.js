import React, { Component } from "react";

class Center extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "11226"
        }
    }

    render() {
        return (
            <div className="panel">
                <div className="centerClock">
                    <h2>3:30 PM</h2>
                </div>
                <div className="centerWeather">
                    <h5>68, Mostly cloudy.</h5>
                </div>
            </div>
        )
    }
}

export default Center;