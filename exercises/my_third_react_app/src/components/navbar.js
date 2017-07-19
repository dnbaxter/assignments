import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class CustomNavbar extends React.Component {
    render() {
        //console.log(this.props.links);
        let navLinks = this.props.links.map((item, i) => {
            return (
                <NavItem key={i} href={item.link}> {item.name} </NavItem>
            )
        });
        let brand = this.props.brand;

        let style = {
            color: "crimson"
        };

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="http://google.com" style={style}> {brand} </a>
                    </Navbar.Brand>
                    {/*<Navbar.Toggle/>*/}
                </Navbar.Header>
                    <Nav pullRight>
                        {navLinks}
                    </Nav>
            </Navbar>
        )
    }
}

export default CustomNavbar;