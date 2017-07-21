import React from "react";

// Components
import ColorBox from "../components/colorbox";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";


class ColorBoxContainer extends React.Component {
    render() {
        return (
            <div>

                <ColorBox hex={this.props.hex} colorName={this.props.colorName} handleClick={this.props.loadColor} style={this.props.style} />

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

export default connect(mapStateToProps, mapDispatchToProps)(ColorBoxContainer);