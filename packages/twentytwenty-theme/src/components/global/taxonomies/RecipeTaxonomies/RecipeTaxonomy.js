import {styled, connect, decode} from "frontity";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import React, {useEffect} from "react";
import FeaturedMedia from "../../../post/featured-media";
import Link from "../../../link";

import tw from "tailwind.macro";

const RecipeTaxonomy = ({taxonomy, state, actions}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const TaxonomyImage = taxonomy.acf.image;

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
        <TaxonomySingleCard>
            <TaxonomyTag link={taxonomy.link}>
                <TaxonomyName>{decode(taxonomy.name)}</TaxonomyName>
                {
                    TaxonomyImage ? <Image src={TaxonomyImage.sizes.small} data-src={TaxonomyImage.sizes.small}
                                           alt={TaxonomyImage.alt} className="lazyload"/> : null
                }
            </TaxonomyTag>
        </TaxonomySingleCard>
    ) : null;
};

export default connect(RecipeTaxonomy);

const TaxonomyTag = styled(Link)`
  font-size: 1.4rem;
  color:black;
  font-weight: 500;
  letter-spacing: 0.036666667em;
  text-decoration: none;
  text-transform: uppercase;
  position:relative;
`;

const TaxonomySingleCard = styled('div')` ${tw`bg-white-400 h-64 hover:bg-gray-200 my-6 sm:inline-block bg-no-repeat bg-center mx-2 rounded overflow-hidden shadow-md hover:shadow-none sm:w-64 sm:h-64`}`;
const Image = styled('img')` ${tw`object-cover object-bottom h-64 w-64 `}`;
const TaxonomyName = styled('span')` ${tw`p-8 align-middle block`}`;





