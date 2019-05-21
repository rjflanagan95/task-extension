import React, { Component } from "react";
import "./panel.css";

// import this panel into other components, replacing the "card" component from reactstrap that's causing CSS issues

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let panelTitle = this.props.title;
        let panelSubtitle = this.props.subtitle;
        let panelText = this.props.text;

        return (
            <div className="panel">
                <div className="panelBody">
                    <h2 className="panelTitle">{panelTitle}</h2>

                    <h4 className="panelSubtitle">{panelSubtitle}</h4>

                    <p className="panelText">{panelText}</p>
                </div>
            </div>
        )
    }
}

export default Panel;