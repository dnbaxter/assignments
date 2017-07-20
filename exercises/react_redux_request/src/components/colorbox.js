import React from "react";

class ColorBox extends React.Component {
    render() {
        return (
            <div>

                <div className="party-box" style={this.props.style} >
                    <button onClick={() => {
                        this.props.handleClick()
                    }} className="btn btn-primary" >Party Time!</button>
                </div>

            </div>
        )
    }
}

export default ColorBox;