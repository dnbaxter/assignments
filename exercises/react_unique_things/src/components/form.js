import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>

                <input placeholder="Title" type="text"
                       value={this.props.input.title}
                       onChange={(event) => {
                           this.props.handleChange("title", event)
                       }}/>
                <input placeholder="URL" type="text"
                       value={this.props.input.imgUrl}
                       onChange={(event) => {
                           this.props.handleChange("imgUrl", event)
                       }}/>
                <input placeholder="Description" type="text"
                       value={this.props.input.description}
                       onChange={(event) => {
                           this.props.handleChange("description", event)
                       }}/>

                <br/>

                <button className="btn btn-primary" onClick={() => {
                    this.props.handleClick(this.props.input);
                    this.props.clearInputs()
                }} >
                    Submit
                </button>

            </div>
        )
    }
}

export default Form;