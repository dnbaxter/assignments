import React from "react";
import autoBind from "react-autobind";

// Components
import TodoList from "../components/todo-list";


class TodoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            showReply: false,
            todos: [
                {
                    name: "Get bread",
                    value: ""
                },
                {
                    name: "Get milk bruh",
                    value: ""
                }
                ],
            inputVal: ""
        };
        autoBind(this);
    }

    // This is where the input value gets added in
    click() {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, { name: this.state.inputVal, value: "" }],
            inputVal: ""
        });
    }
    // This is where we save our updated todo
    saveUpdate(index) {
        let items = [...this.state.todos];
        items[index].name = items[index].value;
        items[index].value = "";
        this.setState({
            ...this.state,
            todos: items
        })
    }
    // Obtains the input value from the input box
    updateValue(event) {
        this.setState({
            ...this.state,
            inputVal: event.target.value
        });
    }
    // Updates the name value of the todo
    updateNameOfTodo(index, event) {
        let items = [...this.state.todos];
        items[index].value = event.target.value;
        this.setState({
            ...this.state,
            todos: items
        })
    }
    // Removes the todo
    removeTodo(index) {
        let oldTodo = [...this.state.todos];
        oldTodo.splice(index, 1);
        this.setState({
            ...this.state,
            todos: oldTodo
        })
    }
    // on enter, run our click function
    keyPress(event) {
        if (event.key === "Enter") {
            this.click();
        }
    }
    alert(event) {
        // alert("We've been clicked boys!");
        event.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Add Todo"
                       value={this.state.inputVal}
                       onKeyPress={this.keyPress}
                       onChange={(event) => {
                           this.updateValue(event)
                }} />


                <button className="btn btn-info" onClick={()=> {
                    this.click()
                }}>
                    Add
                </button>


                <TodoList handleSave={this.saveUpdate}
                          handleUpdate={this.updateNameOfTodo}
                          handleRemove={this.removeTodo}
                          handleAlert={this.alert}
                          handleShow={this.state.showReply}
                          items={this.state.todos}  />

            </div>
        )
    }
}

export default TodoContainer;