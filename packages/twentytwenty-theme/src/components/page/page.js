import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import FeaturedMedia from "../post/featured-media";

import PageCarousel from "./acf/Content/Carousel/PageCarousel";
import Ingredients from "../post/acf/ingredients/Ingredients";
import {SectionContainer} from "../post/post-item";


const Page = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];

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


    const pageContent = page.acf['contentfieldgroup.content'];


    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <div>
            <h1>{page.title.rendered}</h1>

            {page.featured_media !== 0 && (
                <FeaturedImage id={page.featured_media}/>
            )}

            {Object.keys(pageContent)
                .map(function (key, i) {

                    if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.carousel') {
                        const Carousel = pageContent[key]['contentfieldgroup.content.carousel.item'];



                        return <PageCarousel
                            key={i}
                            id={page.id}
                            carousel={Carousel}

                        />
                    }

                    if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.image') {
                        return <h1 key={key}>IMAGE</h1>
                    }

                    if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.accordion') {
                        return <h1 key={key}>Accordion</h1>
                    }

                })}


        </div>
    ) : null;
};

export default connect(Page);


const FeaturedImage = styled(FeaturedMedia)`
margin-top: 0 !important;
position: relative;

> div {
position: relative;
}

&:before {
background: #fff;
content: "";
display: block;
position: absolute;
bottom: 50%;
left: 0;
right: 0;
top: 0;
}
`;
