import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div className="col-md-12" style={this.props.style}>
                <h1> {this.props.counter} </h1>
                <button onClick={ () => {
                    this.props.handleUp()
                }} className="btn btn-success">
                    Up
                </button>

                <button onClick={ () => {
                    this.props.handleDown()
                }} className="btn btn-danger">
                    Down
                </button>
            </div>
        )
    }
}

export default Counter;