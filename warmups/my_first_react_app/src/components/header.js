import React from "react";

class Header extends React.Component {
    render() {

        let subBrandElems = this.props.subBrand.map((item) => {
            return (
                <h3> {item} </h3>
            )
        });

        return (
            <div className="jumbotron">
                <h1> {this.props.brand} </h1>
                {subBrandElems}
            </div>
        )
    }
}

export default Header