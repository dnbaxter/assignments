import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

// Components
import Form from "../components/form";


class FormContainer extends React.Component {
    render() {
        return (
            <div>

                <Form handleClick={this.props.getTodo} />

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

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);