import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import ExternalLinkIcon from "../../../global/icons/ExternalLinkIcon";
import FeaturedMedia from "../../../post/featured-media";

const Card = ({state, actions, libraries, name, description, highlightedText, imageID, url}) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(state.router.link);
    }, []);

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];
    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);
    const Html2React = libraries.html2react.Component;


    return data.isReady ? (
        <div>
            <Container>
                <CardImageContainer>
                    <CardImage id={imageID}/>
                </CardImageContainer>
                <CardContents>
                    <ContentBadge>
                        <ExternalLinkIcon/>
                        {highlightedText}
                    </ContentBadge>
                    <BadgeTitle href={url}>{name}</BadgeTitle>
                    <BadgeDescription>
                        <Html2React html={description}/>
                    </BadgeDescription>
                </CardContents>
            </Container>
        </div>
    ) : null;
};

export default connect(Card);


const Container = styled('div')` ${tw`md:flex shadow-md relative`}`;
const CardImageContainer = styled('div')` ${tw`md:flex-shrink-0`}`;
const CardImage = styled(FeaturedMedia)` ${tw`rounded-lg rounded-r-none md:max-w-xl`}`;
const CardContents = styled('div')`${tw`text-left mt-4 md:ml-6 pl-5`}`;
const ContentBadge = styled('div')`${tw`uppercase tracking-wide text-gray-500 font-bold inline-block pt-5`}`;
const BadgeTitle = styled('h5')`${tw`block mt-1 leading-tight font-normal pt-3 mb-0 text-gray-900 hover:underline`}`;
const BadgeDescription = styled('p')`${tw`mt-2 text-gray-600 pr-6 py-3`}`;


const CardBadgeLink = styled('a')`
text-decoration:none
`;






