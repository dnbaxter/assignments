import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div>

                <div className="col-sm-4 random">
                    <button className="delete" onClick={() => {
                        this.props.handleDelete(this.props.index)
                    }} >
                        X
                    </button>
                    <button className="edit" onClick={() => {
                        this.props.handleShow()
                    }} >
                        Edit
                    </button>

                    <h2> {this.props.item.title} </h2>
                    <div className="uniqueImage" style={{backgroundImage:`url(${this.props.item.imgUrl})`}} ></div>
                    <h4> {this.props.item.description} </h4>

                    <div className="save-box" style={this.props.style} >
                        <input placeholder="Title" value={this.props.input.title}
                               onChange={(event) => {
                                   this.props.handleChange("title", event)
                               }}
                               type="text"/>
                        <input placeholder="URL" value={this.props.input.imgUrl}
                               onChange={(event) => {
                                   this.props.handleChange("imgUrl", event)
                               }}
                               type="text"/>
                        <input placeholder="Description" value={this.props.input.description}
                               onChange={(event) => {
                                   this.props.handleChange("description", event)
                               }}
                               type="text"/>

                        <button className="btn btn-primary" onClick={() => {
                            this.props.handleSave(this.props.input, this.props.index)
                        }} >Save</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Item;