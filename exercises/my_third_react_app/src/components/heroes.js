import React from "react";

class Header extends React.Component {

    render() {

        //console.log(this.props);

        return (
            <div className="col-md-3">
                <div className="heroStuff" style={{
                    backgroundImage: `url('${this.props.image}')`
                }}>
                    <h3> {this.props.name} </h3>
                    <br/>
                    <button onClick={ () => {this.props.handleClick(this.props.name, this.props.messages)} }>
                        Message
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;