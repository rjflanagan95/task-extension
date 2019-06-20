import React, { Component } from "react";
import "./goals.css";
import API from "../../../utils/API";

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

        let newList = {
            title: this.props.title,
            items: currentItems
        }

        console.log(newList);

        if (this.props.listID === "list1") {
            API.updateList1(newList)
            .then(res => {
                this.setState({
                    userInput: ''
                })
            })
        } else if (this.props.listID === "list2") {
            API.updateList2(newList)
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
                            <text className="panelBoxTitle">{val}</text>
                            <button className="panelBoxItemDeleteBtn" onClick={this.removeItem.bind(this, itemIndex)}>-</button>
                        </div>
                    )}
                </div>
                <div className="panelForm goalsForm">
                    <input type="text" id="standard" label="goal" defaultValue="goal" className="panelFormTextInput" onChange={(e) => this.changeUserInput(e.target.value)} value={ this.state.userInput } />
                    <button className="panelFormSubmit" onClick={this.addItem.bind(this)}>+</button>
                </div>
            </div>
        )
    }
}

export default GoalsCard;