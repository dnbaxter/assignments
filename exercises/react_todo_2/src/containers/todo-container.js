import React from "react";

// Component
import TodoList from "../components/todo-list";


class TodoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            items: ["Get bread", "Get milk"]
        }
    }



    render() {
        return (
            <div>

                <TodoList items={this.state.items} />

            </div>
        )
    }
}

export default TodoContainer