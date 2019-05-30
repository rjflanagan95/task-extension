import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require("../Login/btn_google_signin_light_normal_web.png")
    }
  }

  render() {

    return (
        <div className="login">
          <a href="/auth/google">
            <img className="googleBtn" alt="Google Sign-In Button" src={this.state.img} onMouseOver={() => {
              this.setState({
                img: require("../Login/btn_google_signin_light_focus_web.png")
              });
            }} onMouseOut={() => {
              this.setState({
                img: require("../Login/btn_google_signin_light_normal_web.png")
              });
            }} onMouseDown={() => {
              this.setState({
                  img: require("../Login/btn_google_signin_light_pressed_web.png")
                })
            }} onMouseUp={() => {
              this.setState({
                  img: require("../Login/btn_google_signin_light_normal_web.png")
                })
            }}/>
          </a>
        </div>
    );
  }
}

export default Login;
