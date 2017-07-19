import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import ClickerContainer from "./containers/clicker-container";

class App extends React.Component {
    render() {
        return (
            <div>

                <div className="container">
                    <ClickerContainer/>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));