import React from "react";

// Components
import NameBadge from "../components/namebadge";


class NameBadgeList extends React.Component {

    genNameBadges() {
        return this.props.badges.map((badge, i) => {
            return (
                <NameBadge key={badge.firstName + i}
                           firstName={badge.firstName}
                           lastName={badge.lastName}
                           email={badge.email}
                           placeOfBirth={badge.placeOfBirth}
                           phoneNumber={badge.phoneNumber}
                           favoriteFood={badge.favoriteFood}
                           description={badge.description} />
            )
        });
    }

    render() {
        return (
            <div>

                {this.genNameBadges()}

            </div>
        )
    }
}

export default NameBadgeList;