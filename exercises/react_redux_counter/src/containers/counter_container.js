import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

// Components
import Counter from "../components/counter";


class CounterContainer extends React.Component {
    render() {
        return (
            <div>

                <Counter handleAdd={this.props.add} handleSub={this.props.subtract} counter={this.props.counter} />

            </div>
        )
    }
}

// handles putting our state into react
const mapStateToProps = (state) => {
    return state;
};
// handles putting our actionCreators into react
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);