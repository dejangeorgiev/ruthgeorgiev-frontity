import {styled, connect} from "frontity";
import React, {useEffect} from "react";



const FrontPage = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];
    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);


    // Get the html2react component.

    const Html2React = libraries.html2react.Component;


    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <div>
            Frontpage


        </div>
    ) : null;
};

export default connect(FrontPage);

