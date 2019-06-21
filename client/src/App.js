import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./pages/Login/login";
import Main from "./pages/Main/main";
import Settings from "./pages/Settings/settings";

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
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;
