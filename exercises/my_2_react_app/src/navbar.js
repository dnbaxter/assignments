import React from "react";
// import { DropdownButton, MenuItem } from "react-bootstrap";

class Navbar extends React.Component {
    render() {
        //console.log(this.props);
        console.log(this.props.links);
        let links = this.props.links.map((item) => {
            return (
                <li key={item.text}>
                    <a href={item.link}>
                        {item.text}
                    </a>
                </li>
            )
        });



        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="www.google.com">{this.props.brand}</a>
                    </div>
                    <ul className="nav navbar-nav">
                        {links}
                        {/*<li>*/}
                            {/*<DropdownButton>*/}
                                {/*<MenuItem eventKey="1"><a href="google.com">Code</a></MenuItem>*/}
                                {/*<MenuItem eventKey="2"><a href="#">Expo</a></MenuItem>*/}
                            {/*</DropdownButton>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;