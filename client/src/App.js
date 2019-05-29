import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom"
import Main from "./components/Main/main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={}

    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <Main />
    );
  }
}

export default App;
