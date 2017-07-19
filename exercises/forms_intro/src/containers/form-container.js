import React from "react";
import autoBind from "react-autobind";

// Components
import Form from "../components/form";

class FormContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            brand: "Atom Sucks",
            names: ["Mike", "Jordan", "Mike"],
            nameValue: ""
        };
        autoBind(this);
    }

    input(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    }

    click(event) {
        //alert(`Hello ${this.state.nameValue}`);
        this.setState({
            ...this.state,
            names: [...this.state.names, this.state.nameValue],
            nameValue: ""
        });
    }
    remove(index) {
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            names: oldNames
        });
    }

    render() {
        return (
            <Form brand={this.state.brand}
                  names={this.state.names}
                  handleClick={this.click}
                  nameValue={this.state.nameValue}
                  handleInput={this.input}
                  handleRemove={this.remove} />
        )
    }
}

export default FormContainer;