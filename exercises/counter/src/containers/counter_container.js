import React from "react";

import Counter from "../components/counter";


class CounterContainer extends React.Component {

    constructor() {
        super();
        autoBind(this);
        this.state = {counter: 100};
    }
    up() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    down() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <Counter handleUp={this.up} handleDown={this.down} counter={this.state.counter} />
            </div>
        )
    }
}

export default CounterContainer;