import React, {Fragment} from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Article from '../../../../post/post-item-preview'
const RecommendedPost = ({state, id}) => {

    const post = state.source.post[id];

    return (
        <Fragment>
            <Article
            item={post}
            showExcerpt={true}
            showMedia={true}
            />
        </Fragment>
    );
};

export default connect(RecommendedPost);

const Item = styled('div')` ${tw``}`;
