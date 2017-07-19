import React from "react";
import autoBind from "react-autobind";

// Components
import Clicker from "../components/clicker";

class ClickerContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            style: {
                color: "seagreen",
                textAlign: "center",
                textShadow: "1px 1px 2px slategrey"
            },
            blueCounter: 100,
            redCounter: 100
        };
        autoBind(this);
    }

    blueUp() {
        // if (this.state.blueCounter >= this.state.redCounter) {
        //     this.setState({
        //         ...this.state,
        //         style: {
        //             color: "green"
        //         }
        //     })
        // }
        this.setState({
            blueCounter: this.state.blueCounter + 1,
            redCounter: this.state.redCounter - 1
        });
    }
    redUp() {
        this.setState({
            redCounter: this.state.redCounter + 1,
            blueCounter: this.state.blueCounter - 1
        })
    }

    render() {
        return (
            <div>

                <Clicker style={this.state.style}
                         handleBlue={this.blueUp}
                         handleRed={this.redUp}
                         blueCounter={this.state.blueCounter}
                         redCounter={this.state.redCounter} />

            </div>
        )
    }
}

export default ClickerContainer;