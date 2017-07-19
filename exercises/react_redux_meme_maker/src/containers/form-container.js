import React from "react";
import autoBind from "react-autobind";

// Components
import Form from "../components/form";
import { connect } from "react-redux";          // Obtains the thing to connect React to the store
import { bindActionCreators } from "redux";     // Obtains the 'bindActionCreators' to bind the 'this' to the store
import * as actionCreators from "../actions/";  // Obtains the actions and place them in an object called 'actionCreators'

class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            top: "",
            bottom: "",
            url: ""
        };
        autoBind(this);
    }

    // input
    handleChange(key, event) {
        //console.log(`${key}: ${event.target.value}`);
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (
            <div>

                <Form handleClick={this.props.makeMeme}
                      handleChange={this.handleChange}
                      info={this.state} />

            </div>
        )
    }
}

// Handles putting state into our React app
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);