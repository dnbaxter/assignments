import React from "react";
import autoBind from "react-autobind";

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 10
        };
        autoBind(this);
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
            <div className="counter-page">
                <h3> {this.state.counter} </h3>
                <br/><br/>
                <button className="btn btn-success" onClick={this.up} >Up</button>
                <button className="btn btn-danger" onClick={this.down} >Down</button>

                {/*If you do not bind the functions you can also call them
                by using an anonymous function, such as
                onClick={ ()=> {this.up() }} */}
            </div>
        )
    }
}

export default Counter;