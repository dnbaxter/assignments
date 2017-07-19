import React from "react";

class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
                <h2>Hello There</h2>
            </div>
        )
    }
}

export default Content;