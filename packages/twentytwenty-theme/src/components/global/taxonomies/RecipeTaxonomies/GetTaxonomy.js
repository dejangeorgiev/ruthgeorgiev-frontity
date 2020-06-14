import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import FeaturedMedia from "../../../post/featured-media";
import Link from "../../../link";

import tw from "tailwind.macro";

const GetTaxonomy = ({taxonomy, state, actions}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);




    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {

        actions.source.fetch('/cuisine');


    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <div>
            {taxonomy}
        </div>
    ) : null;
};

export default connect(GetTaxonomy);

const TaxonomyTag = styled(Link)`
  font-size: 1.4rem;
  color:black;
  font-weight: 400;
  letter-spacing: 0.036666667em;
  text-decoration: none;
  text-transform: uppercase;
  position:relative;
`;

const TaxonomySingleCard = styled('div')` ${tw`bg-white-400 hover:bg-gray-200 my-6 sm:inline-block bg-no-repeat bg-center mx-2 rounded overflow-hidden shadow-lg hover:shadow-none sm:w-64 sm:h-64`}`;
const Image = styled('img')` ${tw`object-cover object-bottom sm:h-64 sm:w-64`}`;
const TaxonomyName = styled('span')` ${tw`p-8 align-middle block`}`;





