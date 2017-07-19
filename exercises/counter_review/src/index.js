import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";

// Components
import CounterContainer from "./containers/counter_container";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CounterContainer/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));