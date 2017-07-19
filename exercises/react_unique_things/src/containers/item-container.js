import React from "react";
import autoBind from "react-autobind";

import Item from "../components/item";

class ItemContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.item,
            style: {
                opacity: "0"
            },
            count: 0
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    handleShow() {
        let count = this.state.count;
        if(count === 1) {
            this.setState({
                style: {
                    opacity: "0"
                },
                count: this.state.count - 1
            })
        } else {
            this.setState({
                style: {
                    opacity: "1"
                },
                count: this.state.count + 1
            })
        }

    }

    render() {
        return (
            <div>

                <Item key={this.props.item.title + this.props.item.index}
                      style={this.state.style}
                      index={this.props.index}
                      item={this.props.item}
                      input={this.state}
                      handleChange={this.handleChange}
                      handleShow={this.handleShow}

                      handleDelete={this.props.handleDelete}
                      handleInput={this.props.handleInput}
                      handleSave={this.props.handleSave} />

            </div>
        )
    }
}

export default ItemContainer;