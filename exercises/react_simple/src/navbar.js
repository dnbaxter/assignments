import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

class CustomNavbar extends React.Component {
    render() {
        console.log(this.props.links);
        let navLinks = this.props.links.map((item) => {
            return (
                <NavItem href={item.link}> {item.text} </NavItem>
            )
        });
        let brand = this.props.brand;


        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> {brand} </a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {navLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomNavbar;