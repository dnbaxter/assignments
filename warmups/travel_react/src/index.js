import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Components
import SiteContainer from "./containers/site-container.js"
import Header from "./components/header";

let mySites = [
    {
        name: "Hawaii",
        image: "/images/hawaii-beach.png",
        desc: "A beautiful place I want to go."
    },
    {
        name: "Scotland",
        image: "/images/Scotland.jpg",
        desc: "A beautiful place I want to go back too."
    },
    {
        name: "Italy",
        image: "/images/Italy.jpg",
        desc: "A beautiful and romantic place."
    },
    {
        name: "Machu Picchu",
        image: "/images/Machu-Picchu.jpg",
        desc: "A very high place."
    },
    {
        name: "Toketee Falls Oregon",
        image: "/images/Toketee-Falls.jpg",
        desc: "A magical and beautiful waterfall."
    },
    {
        name: "Cherry Blossom Japan",
        image: "/images/1_Meguro2.jpg",
        desc: "A truly magical cherry blossom forest."
    },
    {
        name: "Thailand",
        image: "/images/thailand.jpg",
        desc: "Tropical Beaches."
    }
];


class App extends React.Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div>
                            <SiteContainer sites={mySites}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));