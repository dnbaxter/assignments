import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>

                <div className="form">
                    <div className="form-group">
                        <input type="text" placeholder="first name"
                               value={this.props.data.first} onChange={(event) => {
                                   this.props.handleChange("first", event)
                        }} />
                        <input type="text" placeholder="second name"
                               value={this.props.data.second} onChange={(event) => {
                                   this.props.handleChange("second", event)
                        }} />
                        <input type="text" placeholder="third name"
                               value={this.props.data.third} onChange={(event) => {
                                   this.props.handleChange("third", event)
                        }} />

                        <br/>

                        <button className="btn btn-success" onClick={() => {
                            this.props.handleClick(this.props.data);
                            this.props.clearInputs();
                        }} >
                            Let it select one
                        </button>

                    </div>
                </div>

            </div>
        )
    }
}

export default Form;