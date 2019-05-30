import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
        <div className="login">
            <a href="/auth/google">click here to authenticate with google</a>
            <a href="/auth/logout">click here to logout</a>
        </div>
    );
  }
}

export default Login;
