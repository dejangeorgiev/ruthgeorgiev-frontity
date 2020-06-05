import React from 'react';
import {connect, styled} from "frontity";
import RecommendedPost from "./RecommendedPost";

const RecommendedPosts = ({state, id}) => {

    const data = state.source.get(state.router.link);

    const post = state.source[data.type][data.id];

    //const post = state.source.post[id];

    const RelationshipPosts = post.acf['postfieldgroup.posts'];

    return (
        RelationshipPosts.map((post) => {
            const singlePostType = post['post_type'];
            const singlePostId = post['ID'];

            const singlePost= state.source[singlePostType][singlePostId];
            console.log(singlePost)

                return (
                    <RecommendedPost
                        key={singlePostId}
                        title={singlePost.title.rendered}
                    />
                )
            }
        )
    );
};

export default connect(RecommendedPosts);
