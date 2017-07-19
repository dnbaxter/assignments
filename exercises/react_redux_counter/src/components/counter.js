import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <h1> {this.props.counter} </h1>
                        <button onClick={this.props.handleAdd} className="btn btn-primary">+</button>

                        <button onClick={this.props.handleSub} className="btn btn-danger">-</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Counter;