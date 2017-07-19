import React from "react";

class Form extends React.Component {
    render() {
        return (
            <div>

                <div className="form">
                    <div className="form-group">
                        <input type="text"
                               value={this.props.info.top}
                               onChange={(event) => {
                                   this.props.handleChange("top", event)
                               }}
                               placeholder="Top Text"/>
                        <input type="text"
                               value={this.props.info.bottom}
                               onChange={(event) => {
                                   this.props.handleChange("bottom", event)
                               }}
                               placeholder="Bottom Text"/>
                        <input type="text"
                               value={this.props.info.url}
                               onChange={(event) => {
                                   this.props.handleChange("url", event)
                               }}
                               placeholder="Image URL"/>

                        <button className="btn" onClick={() => {
                            this.props.handleClick(this.props.info)
                        }} >
                            Submit
                        </button>

                    </div>
                </div>


            </div>
        )
    }
}

export default Form;