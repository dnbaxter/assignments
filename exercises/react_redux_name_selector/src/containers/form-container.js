import React from "react";
import autoBind from "react-autobind";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

// Components
import Form from "../components/form";


class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            first: "",
            second: "",
            third: ""
        };
        autoBind(this);
    }

    collectName(key, event) {
        //console.log(`${key}: ${event.target.value}`);
        this.setState({
            [key]: event.target.value
        });
    }
    clearInputs() {
        for(let key in this.state) {
            this.setState({
                [key]: ""
            })
        }
    }

    render() {
        return (
            <div>

                <Form data={this.state}
                      handleClick={this.props.selectName}
                      handleChange={this.collectName}
                      clearInputs={this.clearInputs} />

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