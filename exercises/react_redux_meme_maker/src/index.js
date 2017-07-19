// React
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./css/index.css";

// Redux
import { Provider } from "react-redux";  // Obtains the thing that provides store to our app
import { createStore } from "redux";     // Obtains the thing to make our store
import reducers from "./reducers/";      // Obtains our reducer to handle state

// Components
import Header from "./components/header";
import FormContainer from "./containers/form-container";
import MemeContainer from "./containers/meme-container";

// Create Store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>

                <Header  />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <FormContainer  />
                        </div>
                        <div className="col-sm-6">
                            <MemeContainer  />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));