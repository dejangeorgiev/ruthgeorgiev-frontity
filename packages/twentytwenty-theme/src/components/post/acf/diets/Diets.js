import {connect, styled, decode} from "frontity";
import React from "react";

const Diets = ({diets}) => {

    const DietItems = diets.filter(Boolean);

    if (DietItems.length === 0) {
        return null;
    }

    return (
        <div>
            <span>Diets:</span>
            {DietItems.map((diets) => (
                <div key={diets.id} link={diets.link}>
                    {decode(diets.name)}
                </div>
            ))}
        </div>

    );
};

export default connect(Diets);

