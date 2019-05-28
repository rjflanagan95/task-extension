import React, { Component } from "react";
import "./efficiency.css";

class Efficiency extends Component {
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
      <div className="panel efficiencyPanel">
        <div className="panelBody efficiencyBody">
          <h4 className="panelTitle efficiencyTitle">efficiency</h4>
          <h6 className="panelSubtitle efficiencySubtitle">subtitle</h6>
          <p className="panelText efficiencyText">text</p>
        </div>
      </div>
    );
  }
}

export default Efficiency;
