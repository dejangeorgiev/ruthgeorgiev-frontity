import React from "react";
import {connect, styled} from "frontity";
import SponsoredCard from "./SponsoredCard";

const Sponsored = ({state, id}) => {

    const SponsoredCards = state.source.post[id].acf['postfieldgroup.sponsored'];

    return (
        <div>
            {Object.keys(SponsoredCards).map((key) => {
                const Card = SponsoredCards[key];
                return (
                    <SponsoredCard key={key} card={Card}/>
                )
            })}
        </div>
    );
};

export default connect(Sponsored);


