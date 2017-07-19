import React from "react";

// Components
import TodoItem from "../components/todo-item";

class TodoList extends React.Component {

    genTodoItems() {
        return this.props.items.map((todo, i)=> {
            return (
                <TodoItem nameValue={todo.value} index={i}
                          handleAlert={this.props.handleAlert}
                          handleShow={this.props.handleShow}
                          handleRemove={this.props.handleRemove}
                          handleSave={this.props.handleSave}
                          handleUpdateItem={this.props.handleUpdate}
                          key={todo.name + i}
                          text={todo.name} />
            )
        });
    }

    render() {
        return (
            <div>

                {this.genTodoItems()}

            </div>
        )
    }
}

export default TodoList;