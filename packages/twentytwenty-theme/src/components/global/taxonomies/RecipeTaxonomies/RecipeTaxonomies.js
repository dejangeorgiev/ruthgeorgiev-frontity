import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import RecipeTaxonomy from "./RecipeTaxonomy";
import tw from "tailwind.macro";

const RecipeTaxonomies = ({taxonomies, state, actions}) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    return (
        <div>
            {Object.keys(taxonomies).map((key, id) => {
                const Taxonomy = state.source[taxonomies[key].taxonomy];
                return (
                    <TaxonomyCard key={key}>
                        <TaxonomyTitle>{taxonomies[key].taxonomy}</TaxonomyTitle>
                        {
                            Object.keys(Taxonomy).map(id => {
                                return (
                                    <RecipeTaxonomy key={id} taxonomy={Taxonomy[id]}/>
                                )
                            })
                        }
                    </TaxonomyCard>
                );
            })}
        </div>
    )
};

export default connect(RecipeTaxonomies);

const TaxonomyCard = styled('div')` ${tw`flex-no-wrap text-center`}`;
const TaxonomyTitle = styled('h2')` ${tw`text-gray-800 p-0 text-center uppercase font-normal`}`;

