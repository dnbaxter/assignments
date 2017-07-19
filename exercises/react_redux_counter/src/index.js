import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

// CSS
import "./css/index.css";

// Components
import CounterContainer from "./containers/counter_container";
// Create Store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>

                <div className="container">
                    <CounterContainer  />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));