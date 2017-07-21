import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

// Components
import TodoList from "../components/todo-list";


class TodoListContainer extends React.Component {
    render() {
        return (
            <div>

                <TodoList todos={this.props.todos} />

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);