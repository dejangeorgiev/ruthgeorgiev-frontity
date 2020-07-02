import React from "react";
import {Head, connect, decode} from "frontity";

const Title = ({state}) => {
    // Get data about the current URL.
    const data = state.source.get(state.router.link);
    // Set the default title.
    let title = state.frontity.title;

    if (data.isTaxonomy) {
        // Add titles to taxonomies, like "Category: Nature - Blog Name" or "Tag: Japan - Blog Name".
        // 1. Get the taxonomy entity from the state to get its taxonomy term and name.
        const {taxonomy, name} = state.source[data.taxonomy][data.id];
        // 2. Uppercase first letter of the taxonomy term (from "category" to "Category").
        const taxonomyCapitalized =
            taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
        // 3. Render the proper title.
        title = `${taxonomyCapitalized}: ${decode(name)} - ${state.frontity.title}`;
    } else if (data.isAuthor) {
        // Add titles to authors, like "Author: Jon Snow - Blog Name".
        // 1. Get the author entity from the state to get its name.
        const {name} = state.source.author[data.id];
        // 2. Render the proper title.
        title = `Author: ${name} - ${state.frontity.title}`;
    } else if (data.isPostType) {
        // Add titles to posts and pages, using the title and ending with the Blog Name.
        // 1. Get the post entity from the state and get its title.
        const postTitle = state.source[data.type][data.id].title.rendered;
        // 2. Remove any HTML tags found in the title.
        const cleanTitle = decode(postTitle);
        // 3. Render the proper title.
        title = `${cleanTitle} - ${state.frontity.title}`;
    } else if (data.is404) {
        // Add titles to 404's.
        title = `404 Not Found - ${state.frontity.title}`;
    }

    return (
        <Head>
            <title>{title} - The Best Cooking Recipes, healthy foods & tips</title>
            <meta name="description"
                  content="Welcome to my kitchen. Here we will serve you with a collection of the best cooking recipes, healthy tips, great foods, and how to improve your cooking skills."/>
            <meta property="og:title" content="The Rock"/>
            <meta property="og:type" content="video.movie"/>
            <meta property="og:url" content="https://ruthgeorgiev.com"/>
            <meta property="og:image"
                  content="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/05/ruth-georgiev-kitchen.jpg"/>
            <link rel="shortcut icon" type="image/x-icon" href="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/07/rg_logo.png"/>
        </Head>
    );
};

export default connect(Title);
