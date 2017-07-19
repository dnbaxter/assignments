import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">


                <div className="row">
                    <div className="col-sm-4">
                        <button className="btn btn-danger">X</button>
                    </div>
                    <div className="col-sm-8">
                        <p> {this.props.text} </p>
                    </div>
                </div>


            </div> // Closing div class for todo-item
        )
    }
}

export default TodoItem;