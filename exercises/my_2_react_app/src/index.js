import React from "react";
import ReactDOM from "react-dom";

//import components
import "./index.css";
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";

//navbar links
let navLinks = [
    {
        text: "UpperRight",
        link: "http://google.com"
    },
    {
        text: "Blog",
        link: "http://reddit.com"
    },
    {
        text: "Titles",
        link: "http://ebaumsworld.com"
    }
];


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand="MyNavbar" links={navLinks}/>

                <Content>
                    <h1 className="intro">Why do you say goodbye</h1>
                    <p>Baby comeback!</p>
                </Content>

                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));