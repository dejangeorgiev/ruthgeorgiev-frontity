import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const RecommendedPost = ({state, id}) => {

    const post = state.source.post[id];

    return (
        <div>
            {id}
        </div>
    );
};

export default connect(RecommendedPost);

const Item = styled('div')` ${tw``}`;
