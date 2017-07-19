import React from "react";
import ReactDOM from "react-dom";

//Components
import CounterContainer from "./containers/counter_container";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <CounterContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));