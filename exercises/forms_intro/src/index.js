import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import FormContainer from "./containers/form-container"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <h1>A list of people who think</h1>

                        <FormContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));