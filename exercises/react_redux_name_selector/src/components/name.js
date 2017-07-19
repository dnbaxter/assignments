import React from "react";

class Name extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <h1 className="name-title"> And the random name is! </h1>
                    <h1 className="random-name"> {this.props.randomName} </h1>
                </div>

            </div>
        )
    }
}

export default Name;