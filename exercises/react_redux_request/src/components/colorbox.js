import React from "react";

class ColorBox extends React.Component {
    render() {
        return (
            <div>

                <div className="party-box" style={this.props.style} onClick={() => {
                    this.props.handleClick()
                }} >
                    {/*<button onClick={() => {*/}
                        {/*this.props.handleClick()*/}
                    {/*}} className="btn btn-primary" >Party Time!</button>*/}
                    <br/>
                    <h2> {this.props.hex} </h2>
                    <h2> {this.props.colorName} </h2>
                </div>

            </div>
        )
    }
}

export default ColorBox;