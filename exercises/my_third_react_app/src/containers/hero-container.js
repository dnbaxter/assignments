import React from "react";
import Header from "../components/heroes";

class heroContainer extends React.Component {

    heroAlert(name, messages) {

        let index = Math.floor(Math.random() * messages.length);

        alert(`${name}: ${messages[index]}`);
    }

    render() {

        let heroes = this.props.data.map((item) => {
            return <Header key={item.name} handleClick={() => {this.heroAlert(item.name, item.messages)}} image={item.imagelink} name={item.name}  />
        });

        return (
            <div>
                {heroes}
            </div>
        )
    }
}

export default heroContainer;