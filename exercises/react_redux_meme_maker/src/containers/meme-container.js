import React from "react";

// Components
import Meme from "../components/meme";
import { connect } from "react-redux";          // Obtains the thing to connect React to the store
import { bindActionCreators } from "redux";    // Obtains the 'bindActionCreators' to bind the 'this' to the store
import * as actionCreators from "../actions/";

class MemeContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            style: {
                backgroundImage: ""
            },
            topText: "Bam",
            bottomText: "Did it!"
        }
    }

    render() {
        return (
            <div>

                <Meme image={this.props.url}
                      topText={this.props.top}
                      bottomText={this.props.bottom} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);