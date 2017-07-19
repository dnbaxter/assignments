import React from "react";

class Clicker extends React.Component {
    render() {
        return (
            <div>

                <div className="row" style={this.props.style} >
                    <div className="col-md-6">
                        <h1> Blue Score: {this.props.blueCounter} </h1>
                    </div>
                    <div className="col-md-6">
                        <h1> Red Score: {this.props.redCounter} </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={this.props.style}>
                        <button onClick={ () => {
                            this.props.handleBlue()
                        }} className="btn btn-primary">
                            Blue Team
                        </button>

                        <button onClick={ () => {
                            this.props.handleRed()
                        }} className="btn btn-danger">
                            Red Team
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Clicker;