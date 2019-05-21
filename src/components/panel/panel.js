import React, { Component } from "react";
import "./panel.css";

// import this panel into other components, replacing the "card" component from reactstrap that's causing CSS issues

class Panel extends Component {

    render() {
        return (
            <div className="panel">
                <div className="panelBody">
                    <h2 className="panelTitle">test Title</h2>

                    <h4 className="panelSubtitle">test subtitle</h4>

                    <p className="panelText">test text</p>
                </div>
            </div>
        )
    }
}

export default Panel;