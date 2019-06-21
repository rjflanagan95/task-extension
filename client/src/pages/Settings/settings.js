import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import API from "../../utils/API.js";
import "../Main/main.css";
import "./settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      zipInput: "",
      list1title: "",
      title1input: "",
      list2title: "",
      title2input: ""
    }

    this.changeZIP = this.changeZIP.bind(this);
    this.changeList1 = this.changeList1.bind(this);
    this.changeList2 = this.changeList2.bind(this);
  }

  componentDidMount() {
    API.getUserData()
      .then(res => {
        // if no response from API, force the user to log in
        if (!res) {
          return <Redirect to="/login"/>
        }
        // otherwise set the state to data from the database
        else {
          this.setState({
            location: res.data.location,
            zipInput: "",
            list1title: res.data.list1title,
            title1input: "",
            list2title: res.data.list2title,
            title2input: ""
          });
        }
    }).catch(err => console.log(err));
  }

  changeUserInput(target) {
    this.setState({
      [target.name] : target.value
    });
  }

  changeZIP() {
    let newZIP = this.state.zipInput;

    // will need to add better ZIP validation
    if (newZIP !== "") {
      API.changeZIP(newZIP)
      .then(res => {
        this.setState({
          location: res.data.location,
          zipInput: ''
        });
      })
    }
  }

  changeList1() {
    let newTitle = this.state.title1input;

    if (newTitle !== "") {
      API.changeList1(newTitle)
      .then(res => {
        this.setState({
          list1title: res.data.list1title,
          title1input: ''
        });
      })
    }
  }

  changeList2() {
    let newTitle = this.state.title2input;

    if (newTitle !== "") {
      API.changeList2(newTitle)
      .then(res => {
        this.setState({
          list2title: res.data.list2title,
          title2input: ''
        });
      })
    }
  }

  render() {
    return (
      <Container>
        <Row className="headerRow">
          <a href="/"><div className="headerBtn">Home</div></a>
          <a href="/auth/logout"><div className="headerBtn">Log Out</div></a>
        </Row>
        <Row>
          <Col xs={4}>
            <div className="changePanel">
              <div className="changeItem">
                <div>Current ZIP (Weather): {this.state.location}</div>
                <input className="panelFormTextInput" placeholder="new ZIP" name="zipInput" value={this.state.zipInput} onChange={(e) => this.changeUserInput(e.target)}/><button className="changeFormSubmit" onClick={this.changeZIP}>Update</button>
              </div>
              <div className="changeItem">
                <div>Current Title: {this.state.list1title}</div>
                <input className="panelFormTextInput" placeholder="new list name" name="title1input" value={this.state.title1input} onChange={(e) => this.changeUserInput(e.target)}/>
                <button className="changeFormSubmit" onClick={this.changeList1}>Update</button>
              </div>
              <div className="changeItem">
                <div>Current Title: {this.state.list2title}</div>
                <input className="panelFormTextInput" placeholder="new list name" name="title2input" value={this.state.title2input} onChange={(e) => this.changeUserInput(e.target)}/>
                <button className="changeFormSubmit" onClick={this.changeList2}>Update</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Settings;
