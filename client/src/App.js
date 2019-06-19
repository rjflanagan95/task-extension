import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "./components/Main/main";
import Login from "./pages/Login/login";
import NewMain from "./pages/Main/main";

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
          <Route exact path="/new" component={NewMain} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;
