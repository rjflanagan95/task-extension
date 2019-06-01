import React, { Component } from "react";
import "./efficiency.css";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Efficiency extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className="panel efficiencyPanel">
        <div className="panelBody efficiencyBody">
          <Paper className="panelTitle efficiencyTitle"><Typography variant="h6">Efficiency</Typography></Paper>
        </div>
      </div>
    );
  }
}

export default Efficiency;
