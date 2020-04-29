import {connect, styled, decode} from "frontity";
import React from "react";

const Meals = ({meals}) => {

    const MealTypes = meals.filter(Boolean);

    if (MealTypes.length === 0) {
        return null;
    }

    return (
        <div>
            <span>Meals:</span>
            {MealTypes.map((meals) => (
                <div key={meals.id} link={meals.link}>
                    {decode(meals.name)}
                </div>
            ))}
        </div>
    );
};

export default connect(Meals);

