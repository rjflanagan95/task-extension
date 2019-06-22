import React, { Component } from "react";
import API from "../../../utils/API";
import { Row, Col } from "react-bootstrap";

class GoalsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        })
    }

    addItem() {
        let currentItems = this.props.items;
        let newItem = this.state.userInput;
        currentItems.push(newItem);

        if (this.props.listID === "list1") {
            API.updateList1(currentItems)
            .then(res => {
                this.setState({
                    userInput: ''
                })
            })
        } else if (this.props.listID === "list2") {
            API.updateList2(currentItems)
            .then(res => {
                this.setState({
                    userInput: ''
                })
            })
        }
        
    }

    removeItem(itemIndex) {
        let currentItems = this.props.items;
        currentItems.splice(itemIndex, 1);

        if (this.props.listID === "list1") {
            API.updateList1(currentItems)
            .then(res => {
                this.setState({
                    userInput: ''
                })
            })
        } else if (this.props.listID === "list2") {
            API.updateList2(currentItems)
            .then(res => {
                this.setState({
                    userInput: ''
                })
            })
        }
    }

    render() {
        return (
            <div className="panel">
                <div className="panelTitle">
                    {this.props.title}
                </div>
                <div className="panelList">
                    {this.props.items.map((val, itemIndex) =>
                        <div className="panelBoxItem" key={itemIndex}>
                            <Row>
                                <Col xs={9}>
                                    <div className="panelBoxTitle">{val}</div>
                                </Col>
                                <Col xs={3}>
                                    <button className="panelBoxItemDeleteBtn" onClick={this.removeItem.bind(this, itemIndex)}>-</button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
                <div className="panelForm goalsForm">
                    <Row>
                        <Col xs={9}>
                            <input type="text" id="standard" label="goal" className="panelFormTextInput" onChange={(e) => this.changeUserInput(e.target.value)} value={ this.state.userInput } />
                        </Col>
                        <Col xs={3}>
                            <button className="panelFormSubmit" onClick={this.addItem.bind(this)}>+</button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default GoalsCard;