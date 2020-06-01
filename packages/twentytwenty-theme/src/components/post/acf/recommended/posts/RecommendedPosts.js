import React from 'react';
import {connect, styled} from "frontity";
import RecommendedPost from "./RecommendedPost";

const RecommendedPosts = ({posts, state, id}) => {

    const post = state.source.post[id];


    return (
        posts.map((key) => {
                return (
                    <RecommendedPost key={key}/>
                )
            }
        )
    );
};

export default connect(RecommendedPosts);
