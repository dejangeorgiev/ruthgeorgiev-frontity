import {connect, styled, decode} from "frontity";
import React, {Fragment, useEffect} from "react";
import Article from "../../../post-item-preview";
import Pagination from "../../../../archive/archive-pagination";
import PostSeparator from "../../../post-separator";
import tw from "tailwind.macro";

const RecommendedPosts = ({state, showExcerpt, showMedia, actions, postId}) => {

    useEffect(() => {
        actions.source.fetch(`/posts/${postId}`);
    }, []);
    // Get the data of the current list.
    const data = state.source.get('/recipes/');
    const {primary} = state.theme.colors;

    if (!data.isReady) return null;

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
                {data.items.slice(0, 8).map(({type, id}, index) => {
                    const isLastArticle = index === data.items.length - 1;
                    const item = state.source[type][id];
                    // Render one Item component for each one.
                    return (
                        <Fragment key={item.id}>
                            <Article
                                key={item.id}
                                item={item}
                                showExcerpt={_showExcerpt}
                                showMedia={showMedia}
                            />
                        </Fragment>
                    );
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





