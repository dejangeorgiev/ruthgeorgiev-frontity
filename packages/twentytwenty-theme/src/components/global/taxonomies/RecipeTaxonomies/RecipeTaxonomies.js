import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import RecipeTaxonomy from "./RecipeTaxonomy";
import tw from "tailwind.macro";

import Carousel from 'react-elastic-carousel'

const RecipeTaxonomies = ({taxonomies, state, actions}) => {

    const CarouselBreakpoints= [
        { width: 1, itemsToShow: 2, itemsToScroll: 2  },
        { width: 550, itemsToShow: 3, itemsToScroll: 3 },
        { width: 850, itemsToShow: 5, itemsToScroll: 1  },
        { width: 1150, itemsToShow: 6, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 7, itemsToScroll: 1  },
        { width: 1750, itemsToShow: 8, itemsToScroll: 1  },
    ];

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(taxonomies);
    }, []);

    return (
        <TaxonomiesContainer>
            {Object.keys(taxonomies).map((key, id) => {
                const Taxonomy = state.source[taxonomies[key].taxonomy];
                return (
                    <TaxonomyCard key={key}>
                        <TaxonomyTitle>{taxonomies[key].taxonomy}</TaxonomyTitle>
                        <RecipesCarousel
                            breakPoints={CarouselBreakpoints}
                            focusOnSelect={false}
                            itemsToShow={9}
                            itemsToScroll={1}
                            pagination={true}
                            showArrows={false}
                            enableSwipe={true}
                            enableMouseSwipe={true}
                            preventDefaultTouchmoveEvent={false}
                        >
                        {
                            Object.keys(Taxonomy).map(id => {
                                return (
                                    <RecipeTaxonomy key={id} taxonomy={Taxonomy[id]}/>
                                )
                            })
                        }
                        </RecipesCarousel>
                    </TaxonomyCard>
                );
            })}
        </TaxonomiesContainer>
    )
};

export default connect(RecipeTaxonomies);

const TaxonomiesContainer = styled('div')` ${tw`my-32`}`;
const TaxonomyCard = styled('div')` ${tw`flex-no-wrap text-center`}`;
const TaxonomyTitle = styled('h2')` ${tw`text-gray-800 p-0 text-center uppercase font-normal`}`;
const RecipesCarousel = styled(Carousel)` ${tw`h-auto px-4`}`;

