import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

// Components
import NameBadgeContainer from "./containers/namebadge-container";

class App extends React.Component {
    render() {
        return (
            <div>

                <div className="container-fluid">
                    <NameBadgeContainer  />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));