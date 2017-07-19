import React from "react";
import autoBind from "react-autobind";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

// Components
import Form from "../components/form";


class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "",
            imgUrl: "",
            description: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
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

                <Form input={this.state}
                      handleChange={this.handleChange}
                      handleClick={this.props.genItem}
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