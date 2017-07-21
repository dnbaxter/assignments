import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./css/index.css";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

// Components
import Header from "./components/header";
import FormContainer from "./containers/form-container";
import TodoListContainer from "./containers/todo-list-container";

// Create Store
const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div>

                <Header  />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <FormContainer  />
                        </div>

                        <TodoListContainer  />

                    </div> {/* row */}
                </div> {/* container */}

            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));