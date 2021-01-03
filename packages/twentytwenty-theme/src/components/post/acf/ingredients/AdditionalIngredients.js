import React from 'react';
import {connect, styled} from "frontity";


const AdditionalIngredients = ({state, id}) => {

    const post = state.source.post[id];


   // const Ingredients = post.acf['postfieldgroup.ingredients'];

    return (
        <h1>here</h1>
        /** Ingredients.map((ingredient, index) => {
                return (
                    <IngredientItem
                        key={index}
                        amount={ingredient['postfieldgroup.ingredients.amount']}
                        measure={ingredient['postfieldgroup.ingredients.measure']}
                        name={ingredient['postfieldgroup.ingredients.name']}
                    />
                )
            }
        ) **/
    );
};

export default connect(AdditionalIngredients);
