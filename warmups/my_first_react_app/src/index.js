import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css"

// Components
import Header from "./components/header";
import Counter from "./components/counter";

let brand = "Lucky Brand";
let subBrands = ["Fancy", "Funny", "Fresh"];

class App extends React.Component {
    render() {
        return (
            <div>

                <Header brand={brand} subBrand={subBrands} />

                <div className="container">
                    <div className="row">

                        <Counter/>

                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));