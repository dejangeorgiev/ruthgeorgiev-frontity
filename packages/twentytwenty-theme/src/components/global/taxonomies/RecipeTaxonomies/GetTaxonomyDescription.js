import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import FeaturedMedia from "../../../post/featured-media";
import Link from "../../../link";

import tw from "tailwind.macro";

const GetTaxonomyDescription = ({taxonomy, state, actions}) => {
    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(taxonomy);
    }, []);

    // Get information about the current URL.
    const data = state.source.get(taxonomy);

    if (!data.isReady) return null;

    const taxonomyData = state.source[data.taxonomy][data.id];

    // Load the taxonomy description, but only if the data is ready.
    return data.isReady ? (
        <TaxonomyDescription>
            <TaxonomyDescriptionText>{taxonomyData.description}</TaxonomyDescriptionText>
        </TaxonomyDescription>
    ) : null;
};

export default connect(GetTaxonomyDescription);

const TaxonomyDescription = styled('div')` ${tw`py-2 px-4 rounded inline-flex shadow-xl items-center`}`;
const TaxonomyDescriptionText = styled('p')` ${tw`font-normal text-4xl m-0 text-gray-800`}`;
