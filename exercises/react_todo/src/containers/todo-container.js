import React from "react";
import autoBind from "react-autobind";

// Components
import Todo from "../components/todo";


class TodoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Todo List",
            stuff: [
                {
                    todo: "Get bread",
                    quantity: 2,
                    description: "It's soft"
                }
            ],
            todoValue: "",
            quantityValue: "",
            descriptionValue: ""
        };
        autoBind(this);
    }

    todoInput(event) {
        this.setState({
            ...this.state,
            todoValue: event.target.value
        })
    }
    quantityInput(event) {
        this.setState({
            ...this.state,
            quantityValue: event.target.value
        })
    }
    descriptionInput(event) {
        this.setState({
            ...this.state,
            descriptionValue: event.target.value
        })
    }
    submit(event) {
        // alert(this.state.todoValue);
        // alert(this.state.quantityValue);
        this.setState({
            ...this.state,
            stuff: [...this.state.stuff, {todo: this.state.todoValue,
                                          quantity: this.state.quantityValue,
                                          description: this.state.descriptionValue }],
            // todoValue: ""
        })
    }
    remove(index) {
        let oldTodo = [...this.state.stuff];
        oldTodo.splice(index, 1);
        this.setState({
            ...this.state.stuff,
            stuff: {
                todo: oldTodo
            }
        });
    }



    render() {
        return (
            <Todo title={this.state.title}
                  todos={this.state.stuff}
                  handleSubmit={this.submit}
                  handleTodoInput={this.todoInput}
                  handleQuantityInput={this.quantityInput}
                  handleDescriptionInput={this.descriptionInput}
                  handleRemove={this.remove} />
        )
    }
}

export default TodoContainer;