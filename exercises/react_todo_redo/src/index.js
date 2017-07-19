import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import TodoContainer from "./containers/todo-container";


class App extends React.Component {
    render() {
        return (
            <div>

                <div className="container">

                    <h1>Main page</h1>
                    <TodoContainer  />
                </div>


            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));