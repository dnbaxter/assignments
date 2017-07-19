import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import TodoContainer from "./containers/todo-container";
import Header from "./components/header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-page">
                    <div className="container">
                        <div className="row">
                            <TodoContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));