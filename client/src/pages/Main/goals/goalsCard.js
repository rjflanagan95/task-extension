import React, { Component } from "react";
import "./goals.css";
import API from "../../../utils/API";

class GoalsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            cardTitle: 'Short Term Goals'
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

        let listID = this.props.listID;

        API.updateLists(currentItems, listID)
        .then(res => {
            this.setState({
                userInput: ''
            })
        })
    }

    removeItem(itemIndex) {
        let currentItems = this.props.items;
        currentItems.splice(itemIndex, 1);

        let listID = this.props.listID;

        API.updateLists(currentItems, listID)
        .then(res => {
            this.setState({
                userInput: ''
            })
        })
    }

    render() {
        let currentItems = this.props.items;
        let cardTitle = this.props.title;

        return (
            <div className="panel">
                <div className="panelTitle">
                    {cardTitle}
                </div>
                <div className="panelList">
                    {currentItems.map((val, itemIndex) =>
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