import React from "react";

// Redux


// Components
import Todo from "../components/todo";


class TodoContainer extends React.Component {
    render() {
        return (
            <div>

                <Todo key={this.props.todos.title + this.props.todos.index}
                      index={this.props.index}
                      todos={this.props.todos} />

            </div>
        )
    }
}

export default TodoContainer;