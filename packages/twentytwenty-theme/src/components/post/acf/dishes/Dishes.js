import {connect, styled, decode} from "frontity";
import React from "react";

const Dishes = ({dishes}) => {

    const DishItems = dishes.filter(Boolean);

    if (DishItems.length === 0) {
        return null;
    }

    return (
        <div>
            <span>Dishes:</span>
            {DishItems.map((dishes) => (
                <div key={dishes.id} link={dishes.link}>
                    <span>{decode(dishes.name)}</span>
                </div>
            ))}
        </div>

    );
};

export default connect(Dishes);

