import React from 'react';
import {connect, styled} from "frontity";


const RecipeDescription = ({state, id}) => {

    const post = state.source.post[id];

    const description = post.acf['postfieldgroup.description'];

    return (
        <p>
            {description}
        </p>
    );
};

export default connect(RecipeDescription);
