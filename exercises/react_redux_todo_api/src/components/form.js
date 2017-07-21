import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>

                <div className="todo-inputs">
                    <input placeholder="Title" type="text"/>
                    <input placeholder="Description" type="text"/>
                    <input placeholder="Price" type="text"/>
                    <input placeholder="Image URL" type="text"/>
                    <input placeholder="Completed?" type="checkbox"/> Completed?

                    <br/>
                    <button onClick={() => {
                        this.props.handleClick()
                    }} >Search</button>
                </div>

            </div>
        )
    }
}

export default Form;