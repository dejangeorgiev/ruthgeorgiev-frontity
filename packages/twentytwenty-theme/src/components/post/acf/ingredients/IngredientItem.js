import React from 'react';
import {connect, styled} from "frontity";


const IngredientItem = ({key, amount, measure, name, image}) => {

    const imageUrl = image.sizes['very-small'];
    const imageAlt = image.alt;

    return (
        <div>
            <p>{key}</p>
            <p>{amount}</p>
            <p>{measure}</p>
            <p>{name}</p>
            <img
                src={imageUrl}
                alt={imageAlt}
            />
        </div>
    );
};

export default connect(IngredientItem);
