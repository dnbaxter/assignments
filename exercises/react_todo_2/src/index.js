import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import Header from "./components/header";
import TodoContainer from "./containers/todo-container";


class App extends React.Component {
    render() {
        return (
            <div>

                <Header/>

                <div className="container">
                    <TodoContainer  />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));