import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";


const IngredientsRecipeName = ({state, id, name}) => {

    const post = state.source.post[id];

    const Name = post.acf['postfieldgroup.recipe_name'];

    return (
        <H3TagRecipeName>{name}</H3TagRecipeName>
    );
};

export default connect(IngredientsRecipeName);


const H3TagRecipeName = styled('h4')` ${tw`text-gray-800 font-normal text-left uppercase`}`;