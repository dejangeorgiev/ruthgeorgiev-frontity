import React from "react";
import {connect, styled} from "frontity";
import BadgeCard from "./BadgeCard";


const Badge = ({state, id}) => {

    const Badges = state.source.post[id].acf['postfieldgroup.badge'];

    return (
        <div>
            {Object.keys(Badges).map((key) => {
                const Card = Badges[key];
                return (
                    <BadgeCard key={key} card={Card}/>
                )
            })}
        </div>
    );
};

export default connect(Badge);


