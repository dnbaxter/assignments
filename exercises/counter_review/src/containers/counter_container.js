import React from "react";
import autoBind from "react-autobind";

// Components
import Counter from "../components/counter";

class CounterContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 100,
            style: {
                color: "black",
                textAlign: "center"
            }
        };
        autoBind(this);
    }
    up() {
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                color: "red",
                textShadow: "2px 2px 1px black"
            }
        });
    }
    down() {
        this.setState({
            counter: this.state.counter - 1,
            style: {
                ...this.state.style,
                color: "blue",
                textShadow: "2px 2px 1px black"
            }
        });
    }

    render() {
        return (
            <div>
                <Counter style={this.state.style} handleUp={this.up} handleDown={this.down} counter={this.state.counter} />
            </div>
        )
    }
}

export default CounterContainer;