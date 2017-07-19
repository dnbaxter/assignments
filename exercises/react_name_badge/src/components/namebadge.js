import React from "react";

class NameBadge extends React.Component {
    render() {
        return (
            <div className="badges">

                <div className="row">
                    <div className="col-md-12">
                        <div className="header"><h2>Badge:</h2></div>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            Name: {this.props.firstName} {this.props.lastName}
                        </h3>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            Phone: {this.props.phoneNumber}
                        </h3>
                    </div>

                    <div className="col-md-6">
                        <h3>
                            Place of Birth: {this.props.placeOfBirth}
                        </h3>
                    </div>
                    <div className="col-md-6">
                        <h3>
                            Favorite Food: {this.props.favoriteFood}
                        </h3>
                    </div>

                    <div className="col-md-6">
                        <h3>
                            Email: {this.props.email}
                        </h3>
                    </div>

                    <div className="col-md-12">
                        <p>
                            {this.props.description}
                        </p>
                    </div>

                </div> {/* Row */}

            </div> // Main Div
        )
    }
}

export default NameBadge;