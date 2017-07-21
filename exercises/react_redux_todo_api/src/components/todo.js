import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div>

                <div className="col-sm-6">

                    <div className="todo-list">
                        <h2> {this.props.todos.title} </h2>
                        <h4> {this.props.todos.description} </h4>
                        <h4> {this.props.todos.price} </h4>
                        <img src={this.props.todos.imgUrl} alt=""/>
                        <h4> {this.props.todos.completed} </h4>
                    </div>

                </div>

            </div>
        )
    }
}

export default Todo;