import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";

import Carousel from 'react-elastic-carousel'

const RecipeTaxonomyImage = ({url, state, actions}) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
    }, []);

    const TaxonomyImageStyles = {
        backgroundImage: `url(${url})`
    };

    return (
        <>
            <TaxonomyImage style={TaxonomyImageStyles}/>
        </>
    )
};

export default connect(RecipeTaxonomyImage);

const TaxonomyImage = styled('div')` ${tw`
h-halfscreen 
w-full 
lg:w-11/12
m-auto 
bg-cover 
bg-center 
bg-no-repeat 
flex 
flex-col 
justify-center 
items-center
`}`;