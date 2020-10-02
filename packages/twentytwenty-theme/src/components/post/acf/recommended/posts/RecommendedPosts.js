import {connect, styled, decode} from "frontity";
import React, {Fragment, useEffect, useState} from "react";
import Article from "../../../post-item-preview";
import Pagination from "../../../../archive/archive-pagination";
import PostSeparator from "../../../post-separator";
import tw from "tailwind.macro";
import PostItemPreview from "../../../post-item-preview";
import PostItem from "../../../post-item";

const RecommendedPosts = ({state, libraries, showExcerpt, showMedia, actions, postId}) => {

    /**
     useEffect(() => {
        actions.source.fetch(`/posts/${postId}`);
    }, []);
     */
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        libraries.source.api.get({
            endpoint: "posts",
            params: {_embed: false, per_page: 100}
        })
            .then(response => {
                response.json().then(data => {
                    setPosts(data);
                });
            });

    }, []);
    
    // Get the data of the current list.
    const data = state.source.get('/recipes/');
    const {primary} = state.theme.colors;

    // Whether the show the excerpt instead of the full content
    // If passed as prop, we'll respect that. Else, we'll use the theme settings
    const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;
    /**
     * The item's cuisine is an array of each cuisine id
     * So, we'll look up the details of each cuisine in allCuisine
     */

    return (
        <>
            <ArticlesContainer>
                {/* Iterate over the items of the list. */}
                {posts.map((post, id) => {

                    // Render one Item component for each one.


                    /**
                     return (
                     <Fragment key={id}>
                     <Article
                     key={post.id}
                     item={post}
                     showExcerpt={_showExcerpt}
                     showMedia={showMedia}
                     />
                     </Fragment>
                     );
                     */
                })}
            </ArticlesContainer>

            {data.totalPages > 1 && (
                <>
                    <PostSeparator/>
                    <Pagination size="thin"/>
                </>
            )}
        </>
    );
};

export default connect(RecommendedPosts);

const ArticlesContainer = styled('div')` ${tw`flex flex-wrap justify-center bg-gray-200 py-24 w-full`}`;





