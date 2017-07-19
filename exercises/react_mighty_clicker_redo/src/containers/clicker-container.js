import React from "react";
import autoBind from "react-autobind";

//import components
import Clicker from "../components/clicker.js"
class ClickerContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            blue: 0
        };
        autoBind(this);
    }
    click(color) {
        if(color === "blue") {
            this.setState({
                ...this.state,
                red: this.state.red - 1,
                blue: this.state.blue + 1
            });
        } else {
            this.setState({
                ...this.state,
                red: this.state.red + 1,
                blue: this.state.blue - 1
            });
        }
    }
    render() {
        return (
            <div>
                <Clicker handleClick={this.click} color="red" counter={this.state.red}/>
                <Clicker handleClick={this.click} color="blue" counter={this.state.blue}/>
            </div>
        )
    }
}

export default ClickerContainer;