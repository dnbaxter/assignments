import React from "react";
import autoBind from "react-autobind";

// Components
import NameBadgeList from "../components/namebadge-list";

class NameBadgeContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Create Your Name Badge",
            badges: [
                {
                    firstName: "Dustin",
                    lastName: "Baxter",
                    email: "test@test.com",
                    placeOfBirth: "Georgia, USA",
                    phoneNumber: "777-777-6969",
                    favoriteFood: "Mango",
                    description: "I love to go hiking, and summit new peaks."
                }
            ],
            placeholder: [
                "First Name",
                "Last Name",
                "Email",
                "Place of Birth",
                "Phone Number",
                "Favorite Food"
            ],
            input: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phoneNumber: "",
                favoriteFood: "",
                description: ""
            }
        };
        autoBind(this);
    }

    emptyInput() {
        let copyInput = {...this.state.input};
        for (let key in copyInput) {
            copyInput[key] = "";
        }
        return copyInput;
    }

    spaceToCamel(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
    }

    genInputs() {
        return this.state.placeholder.map((text, i) => {

            // console.log(this.spaceToCamel(text));

            return (

                <div className="col-md-6" key={text + i}>
                    <input className="form-control"
                           value={this.state.input[this.spaceToCamel(text)]}
                           onKeyPress={this.keyPress}
                           onChange={(event) => {
                               this.updateNameBadge(this.spaceToCamel(text), event)
                           }}
                           key={text + i} type="text"
                           placeholder={text}/>
                </div>

            )
        });
    }

    updateNameBadge(key, event) {

        // console.log(event.target.value);

        let input = {
            ...this.state.input,
        };
        input[key] = event.target.value;

        this.setState({
            ...this.state,
            input: input
        });

    }

    submitInfo() {
        this.setState({
            ...this.state,
            badges: [...this.state.badges, {
                firstName: this.state.input.firstName,
                lastName: this.state.input.lastName,
                email: this.state.input.email,
                placeOfBirth: this.state.input.placeOfBirth,
                phoneNumber: this.state.input.phoneNumber,
                favoriteFood: this.state.input.favoriteFood,
                description: this.state.input.description
            }],
            input: this.emptyInput()
        });
    }

    keyPress(event) {
        if (event.key === "Enter") {
            this.submitInfo();
        }
    }

    render() {
        return (
            <div>

                <h1> Create Your Name Badge Now </h1>
                <div className="form">
                    <div className="form-group">
                        <div className="row">
                            {this.genInputs()}

                            <textarea className="text-area"
                                      placeholder="Tell us about yourself"
                                      value={this.state.input.description}
                                      onKeyPress={this.keyPress}
                                      onChange={ (event) => {
                                          this.updateNameBadge("description", event)
                                      }} /><br/>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <button className="btn btn-info" onClick={()=> {
                            this.submitInfo()
                        }}>
                            Submit
                        </button>
                    </div>

                </div>


                <NameBadgeList badges={this.state.badges} />

            </div>
        )
    }
}

export default NameBadgeContainer;