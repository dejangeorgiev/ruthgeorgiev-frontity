import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";


const Text = ({state, actions, libraries, title, text}) => {

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
            <Title>{title}</Title>
            <TextContainer>
                <Html2React html={text}/>
            </TextContainer>
        </Container>
    ) : null;
};

export default connect(Text);


const Container = styled('div')` ${tw`mx-auto p-10 bg-white shadow-xl`}`;
const Title = styled('h2')` ${tw`text-gray-800 font-normal px-2 uppercase text-center`}`;
const TextContainer = styled('div')` ${tw`m-auto items-center`}`;









