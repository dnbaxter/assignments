import React from "react";

class Meme extends React.Component {
    render() {
        return (
            <div>

                <div className="meme-image" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="meme-top-text"> <h1> {this.props.topText} </h1> </div>
                    <div className="meme-bottom-text"> <h1> {this.props.bottomText} </h1> </div>
                </div>

            </div>
        )
    }
}

export default Meme;