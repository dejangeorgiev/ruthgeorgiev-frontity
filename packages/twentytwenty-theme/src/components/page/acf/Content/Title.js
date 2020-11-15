import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";


const Title = ({state, actions, libraries, title}) => {

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
        <div>
            <TitleH1>{title}</TitleH1>
        </div>
    ) : null;
};

export default connect(Title);

const TitleH1 = styled('h1')` ${tw`text-gray-800 font-medium px-2 text-7xl text-center`}`;










