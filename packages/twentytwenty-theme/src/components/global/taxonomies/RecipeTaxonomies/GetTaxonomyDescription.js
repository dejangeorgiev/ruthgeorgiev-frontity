import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import {EntryContent} from "../../../post/post-item";

const GetTaxonomyDescription = ({taxonomy, state, actions, libraries}) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(taxonomy);
    }, []);


    const Html2React = libraries.html2react.Component;

    // Get information about the current URL.
    const data = state.source.get(taxonomy);

    if (!data.isReady) return null;

    const taxonomyData = state.source[data.taxonomy][data.id];

    // Load the taxonomy description, but only if the data is ready.
    return data.isReady ? (
        <TaxonomyDescription>
            <TaxonomyDescriptionText>
                <Html2React html={taxonomyData.description}/>
            </TaxonomyDescriptionText>
        </TaxonomyDescription>
    ) : null;
};

export default connect(GetTaxonomyDescription);

const TaxonomyDescription = styled('div')` ${tw`py-2 px-4 rounded inline-flex shadow-xl items-center`}`;
const TaxonomyDescriptionText = styled('div')` ${tw`font-normal text-2xl m-0 tracking-wide leading-normal text-gray-800`}`;
