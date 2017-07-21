import React from "react";

// Components
import TodoContainer from "../containers/todo-container";


class TodoList extends React.Component {

    genTodos() {
        return this.props.todos.map((todo, i) => {
            return (
                <TodoContainer key={todo.title + i}
                               index={i}
                               todos={todo} />
            )
        })
    }

    render() {
        return (
            <div>

                { this.genTodos() }

            </div>
        )
    }
}

export default TodoList;