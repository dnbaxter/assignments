import React from "react";

// Components
import ItemContainer from "../containers/item-container";


class ItemList extends React.Component {

    genItems() {
        return this.props.item.map((item, i) => {
            // console.log(item.title);
            return (
                <ItemContainer key={item.title + i}
                               index={i}
                               item={item}
                               style={this.props.style}
                               handleShow={this.props.handleShow}
                               handleDelete={this.props.handleDelete}
                               input={this.props.inputs}
                               handleInput={this.props.handleInput}
                               handleSave={this.props.handleSave}/>
            )
        })
    }

    render() {
        return (
            <div>

                { this.genItems() }

            </div>
        )
    }
}

export default ItemList;