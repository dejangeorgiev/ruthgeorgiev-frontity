import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";


const RecipeDescription = ({state, id, libraries}) => {

    const post = state.source.post[id];

    const description = post.acf['postfieldgroup.description'];
    const Html2React = libraries.html2react.Component;
    return (
        <Description>
            <Html2React html={description} />
        </Description>
    );
};

export default connect(RecipeDescription);



const Description = styled('p')` ${tw`text-left`}`;

