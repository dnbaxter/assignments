import React from "react";

class Todo extends React.Component {

    genTodo() {
        this.todoList = this.props.todos.map((todos, i) => {
            return (
                <div key={todos.todo + i}>
                    <div className="col-md-12">
                        <button className="btn btn-danger" style={{padding:"2px", marginRight:"5px"}} onClick={ () => {
                            this.props.handleRemove(i)
                        }} >X</button>
                        {todos.todo}
                    </div>
                </div>
            )
        });
    }

    genQuantity() {
        this.quantityList = this.props.todos.map((quantities, i) => {
            return (
                <div key={quantities.quantity + i}>
                    <div className="col-md-12">
                        {quantities.quantity}
                    </div>
                </div>
            )
        });
    }

    genDescription() {
        this.descriptionList = this.props.todos.map((descriptions, i) => {
            return (
                <div key={descriptions.description + i}>
                    <div className="col-md-12">
                        {descriptions.description}
                    </div>
                </div>
            )
        });
    }

    render() {
        console.log(this.props.todos);

        this.genTodo();
        this.genQuantity();
        this.genDescription();

        return (
            <div>
                <div className="col-md-5">
                    <div className="todo-list">
                        <h1> {this.props.title} </h1>

                        <label>
                            Todo Item
                            <input type="text" className="form-control" name="name"
                                   value={this.props.todoValue}
                                   onChange={this.props.handleTodoInput}/>
                        </label><br/>
                        <label>
                            Quantity
                            <input type="text" className="form-control" name="name"
                                   value={this.props.quantityValue}
                                   onChange={this.props.handleQuantityInput}/>
                        </label><br/>
                        <label>
                            Description
                            <input type="text" className="form-control" name="name"
                                   value={this.props.descriptionValue}
                                   onChange={this.props.handleDescriptionInput}/>
                        </label><br/><br/>
                        <input type="submit" className="btn btn-success" value="Submit"
                               onClick={this.props.handleSubmit}/>

                    </div>
                </div>


                <div className="todo-titles">
                    <div className="row">
                        <div className="col-md-2">
                            <h2>Todo</h2>
                            {this.todoList}
                        </div>
                        <div className="col-md-2">
                            <h2>Quantity</h2>
                            {this.quantityList}
                        </div>
                        <div className="col-md-2">
                            <h2>Description</h2>
                            {this.descriptionList}
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default Todo;