import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";


const RecipeDescription = ({state, id}) => {

    const post = state.source.post[id];

    const description = post.acf['postfieldgroup.description'];

    return (
        <Description>
            {description}
        </Description>
    );
};

export default connect(RecipeDescription);



const Description = styled('p')` ${tw`text-left`}`;