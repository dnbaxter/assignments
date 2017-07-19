import React from "react";

class TodoItem extends React.Component {

    constructor() {
        super();

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {

        const content = this.state.checked
            ? <input className="update-todo"
                     placeholder="Update Todo"
                     type="text"
                     value={this.props.nameValue}
                     onChange={ (event) => {
                         this.props.handleUpdateItem(this.props.index, event)
                     }} />
            : null;

        return (
            <div className="todo-item">


                <div className="row">
                    <div className="col-sm-4">
                        <button className="btn btn-danger" onClick={() => {this.props.handleRemove(this.props.index)}} >X</button>
                    </div>
                    <div className="col-sm-8">
                        <p>
                            <input type="checkbox"
                               checked={ this.state.checked }
                               onChange={ this.handleChange } />
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            {this.props.text}
                        </p>
                    </div>

                    { content }

                    <button className="btn btn-success" onClick={ () => {
                        this.props.handleSave(this.props.index)
                    }} >Save</button>


                </div>


            </div> // Closing div class for todo-item
        )
    }
}

export default TodoItem;