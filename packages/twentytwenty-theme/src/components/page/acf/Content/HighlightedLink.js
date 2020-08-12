import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";


const HighlightedLink = ({state, actions, libraries}) => {

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
        <Container>

            <Title>General</Title>

        </Container>
    ) : null;
};

export default connect(HighlightedLink);


const Container = styled('div')` ${tw`flex mx-3 rounded max-w-xl items-center inline-block px-10 shadow-2xl border-2 border-solid`}`;
const Title = styled('h5')` ${tw`m-0 p-0`}`;









