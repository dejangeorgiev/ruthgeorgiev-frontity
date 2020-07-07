import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";


const PageAccordion = ({state, actions, libraries}) => {

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
      <div>Accordion</div>
    ) : null;
};

export default connect(PageAccordion);



const CarouselContainer = styled('div')` ${tw`m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200`}`;







