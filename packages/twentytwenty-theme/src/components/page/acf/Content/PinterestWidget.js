import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import InstagramEmbed from 'react-instagram-embed';
import SectionTitle from "../../global/SectionTitle";
import RecipeTaxonomy from "../../../global/taxonomies/RecipeTaxonomies/RecipeTaxonomy";

const PinterestWidget = ({
                       state,
                       actions,
                       libraries,
                       title,
                       profile,
                   }) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(state.router.link);
    }, []);

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];
    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);
    const Html2React = libraries.html2react.Component;
    return data.isReady ? (
        <>
            <SectionTitle title={title}/>

            <a data-pin-do="embedUser" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="100" href={profile}></a>

        </>
    ) : null;
};

export default connect(PinterestWidget);

const InstaPosts = styled('div')` ${tw`flex flex-wrap content-center justify-center h-auto m-auto`}`;
// const InstaPosts = styled('div')` ${tw`flex flex-wrap items-center justify-between h-auto m-auto`}`;
const InstaPost = styled('div')` ${tw`px-4 inline-flex`}`;





