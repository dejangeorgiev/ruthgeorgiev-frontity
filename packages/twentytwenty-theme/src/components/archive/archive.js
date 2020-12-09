import {connect, styled, decode} from "frontity";
import React, {Fragment, useEffect} from "react";
import Article from "../post/post-item-preview";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";
import RecipeTaxonomies from "../global/taxonomies/RecipeTaxonomies/RecipeTaxonomies";
import tw from "tailwind.macro";
import Link from "../link"
import DeleteIcon from "../global/icons/DeleteIcon";
import GetTaxonomyDescription from "../global/taxonomies/RecipeTaxonomies/GetTaxonomyDescription";
import Author from "../global/author/Author"
import ArchiveLoadMore from "./archive-load-more";
import RecipeTaxonomyImage from "../global/taxonomies/RecipeTaxonomies/RecipeTaxonomyImage";

import SocialMediaShareButtons from "../global/social-share/SocialMediaShareButtons";

const Archive = ({state, showExcerpt, showMedia}) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);
    const {primary} = state.theme.colors;

    const shareableUrl = state.frontity.url + state.router.link;



    // Whether the show the excerpt instead of the full content
    // If passed as prop, we'll respect that. Else, we'll use the theme settings
    const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;
    useEffect(() => {
        Post.preload();
    }, []);

    const posts = data.items;

    // Get Author data
    const AuthorData = state.source.author[data.id];

    // Get all taxonomies
    const taxonomies = state.source.taxonomies;

    /**
     * The item's cuisine is an array of each cuisine id
     * So, we'll look up the details of each cuisine in allCuisine
     */

    return (
        <>
            {/* If the post has categories, render the categories */}
            {taxonomies && data.isPostArchive && <RecipeTaxonomies taxonomies={taxonomies}/>}

            {/* If the list is a taxonomy, we render a title. */}
            {data.isTaxonomy &&

            (
                <>
                    <ArchiveHeader labelColor={primary} label={data.taxonomy}>
                        <TaxonomyTagButton link="/recipes">
                            <span>{decode(state.source[data.taxonomy][data.id].name)}</span>
                            <DeleteIcon/>
                        </TaxonomyTagButton>
                    </ArchiveHeader>
                    {state.source[data.taxonomy][data.id].acf ?
                        state.source[data.taxonomy][data.id].acf.image &&
                        <RecipeTaxonomyImage url={state.source[data.taxonomy][data.id].acf.image.url}/> :
                        <RecipeTaxonomyImage
                            url="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/06/brunch-scaled.jpg"
                        />
                    }
                    <SocialMediaShareButtons
                        url={shareableUrl}
                        media={state.source[data.taxonomy][data.id].acf ?
                            state.source[data.taxonomy][data.id].acf.image &&
                            state.source[data.taxonomy][data.id].acf.image.url :
                            "https://admin.ruthgeorgiev.com/wp-content/uploads/2020/06/brunch-scaled.jpg"}
                        alt={state.source[data.taxonomy][data.id].acf ?
                            state.source[data.taxonomy][data.id].acf.image &&
                            state.source[data.taxonomy][data.id].acf.image.alt :
                            "Ruth Georgiev - Recipes cooked with love"
                        }
                        title={
                            state.source[data.taxonomy][data.id].acf ?
                                state.source[data.taxonomy][data.id].acf.title &&
                                state.source[data.taxonomy][data.id].acf.title :
                                "The best of " + state.source[data.taxonomy][data.id].name + " " + state.source[data.taxonomy][data.id].taxonomy
                        }
                        children={
                            state.source[data.taxonomy][data.id].acf ?
                                state.source[data.taxonomy][data.id].acf.title &&
                                state.source[data.taxonomy][data.id].acf.title :
                                "The best of " + state.source[data.taxonomy][data.id].name + " " + state.source[data.taxonomy][data.id].taxonomy
                        }
                        hashtag='#ruthgeorgiev'
                        hashtags={[state.source[data.taxonomy][data.id].acf ?
                            state.source[data.taxonomy][data.id].acf.hashtags &&
                            state.source[data.taxonomy][data.id].acf.hashtags :
                            'ruthgeorgiev,recipes,foodie,cooking']}
                    />

                    <hr/>
                </>
            )}

            {/* If the list is for a specific author, we render a title. */}
            {data.isAuthor && (
                <ArchiveHeader labelColor={primary}>
                    <Author author={AuthorData}/>
                </ArchiveHeader>
            )}

            <ArticlesContainer id="articlesContainer">
                {/* Iterate over the items of the list. */}
                {data.items.map(({type, id}, index) => {
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
                    <Pagination size="thin"/>
                </>
            )}
        </>
    );
};

export default connect(Archive);


const TaxonomyTagButton = styled(Link)` ${tw`z-10 border-solid border-2 border-black-200 hover:bg-gray-400 text-gray-800 font-normal py-2 px-4 no-underline rounded-full inline-flex items-center`}`;

const ArticlesContainer = styled('div')` ${tw`flex flex-wrap justify-center`}`;
const TaxonomyBackgroundImage = styled('div')` ${tw``}`;
const TaxonomyContainer = styled('div')` ${tw`relative`}`;







