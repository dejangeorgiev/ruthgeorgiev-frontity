import React from 'react';
import {connect, styled} from "frontity";
import RecommendedPost from "./RecommendedPost";

const RecommendedPosts = ({state, id}) => {

    const post = state.source.post[id];

    const RelationshipPosts = post.acf['postfieldgroup.posts'];

    return (
        RelationshipPosts.map((post, index) => {
                return (
                    <RecommendedPost
                        key={index}
                        id={post['ID']}
                    />
                )
            }
        )
    );
};

export default connect(RecommendedPosts);
