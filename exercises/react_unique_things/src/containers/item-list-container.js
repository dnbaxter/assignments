import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

// Components
import ItemList from "../components/item-list";


class ItemListContainer extends React.Component {
    handleInput(key, index, event) {
        let inputCopy = [...this.state.inputs];
        inputCopy[index][key] = event.target.value;

        this.setState({
            inputs: inputCopy
        });
    }

    render() {
        return (
            <div>

                <ItemList handleDelete={this.props.delItem}
                          style={this.props.style}
                          handleShow={this.props.handleShow}
                          item={this.props.items}
                          handleSave={this.props.update}
                          handleInput={this.props.handleInput}  />

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

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);