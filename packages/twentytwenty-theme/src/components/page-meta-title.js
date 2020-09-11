import React, {useEffect} from "react";
import {Head, connect, decode} from "frontity";

const Title = ({state, actions}) => {
    // Get data about the current URL.
    const data = state.source.get(state.router.link);
    // Set the default title.
    let title = state.frontity.title;
    // Set the default description.
    let description = state.frontity.description;

    if (data.isTaxonomy) {
        // Add titles to taxonomies, like "Category: Italian - Blog Name" or "Tag: Asian - Blog Name".
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
            <title>{title} - The Best Cooking Recipes & healthy tips</title>
            <html lang="en"/>
            <meta name="robots" content="all"/>
            <link rel="shortcut icon" type="image/x-icon"
                  href="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/07/rg_logo.png"/>
            <link rel="shortcut icon" type="image/x-icon"
                  href="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/07/rg_logo.png"/>


                <link rel="stylesheet"
                      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"
                      integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8=" crossorigin="anonymous"/>
            <meta name="p:domain_verify" content="ca0a59bb01e4367019fe7adbeb9a855a"/>
            <script data-ad-client="ca-pub-2902968812206324" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
);
};

export default connect(Title);
