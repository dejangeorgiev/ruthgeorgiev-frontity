import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";

import Carousel, {consts} from 'react-elastic-carousel'
import Food from './images/food.jpg'
import Brunch from './images/brunch.jpg'
import Brekkie from './images/brekkie.jpg'

const FrontPage = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];
    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);

    // Get the html2react component.

    const Html2React = libraries.html2react.Component;

    const FirstSlideStyles = {
        backgroundImage: `url(${Food})`
    };

    const SecondSlideStyles = {
        backgroundImage: `url(${Brunch})`
    };

    const ThirdSlideStyles = {
        backgroundImage: `url(${Brekkie})`

    };

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
        <FrontPageContainer>
            <HomeCarousel
                renderArrow={arrow}
                focusOnSelect={true}
                itemsToShow={1}
                itemsToScroll={1}
                pagination={false}
                showArrows={true}
                enableSwipe={true}
                enableMouseSwipe={true}
                disableArrowsOnEnd={true}
                preventDefaultTouchmoveEvent={true}
            >
                <FirstSlide style={FirstSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Recipes</SlideContentTitle>
                        <span>A variety of recipes, vegan, vegetarian, healthy, Asian, European...</span>
                    </SlideContent>
                </FirstSlide>

                <SecondSlide style={SecondSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Travel</SlideContentTitle>
                        <span>A variety of travel tips, from Asia till Europe...</span>
                    </SlideContent>
                </SecondSlide>

                <ThirdSlide style={ThirdSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Gardening</SlideContentTitle>
                        <span>A variety of Gardening tips, from plants till foods...</span>
                    </SlideContent>
                </ThirdSlide>
            </HomeCarousel>


        </FrontPageContainer>
    ) : null;
};

export default connect(FrontPage);


export function arrow({type, onClick, isEdge}) {
    const pointer = type === consts.PREV ? '👈' : '👉';
    return type === consts.PREV ? (
        <PrevButton onClick={onClick} disabled={isEdge}>{pointer}</PrevButton>
    ) : <NextButton onClick={onClick} disabled={isEdge}>{pointer}</NextButton>
}

const FrontPageContainer = styled('div')` ${tw`flex flex-wrap outline-none fixed w-full top-0 h-full min-h-full`}`;

const HomeCarousel = styled(Carousel)` ${tw`p-0 m-0 relative w-full h-full min-h-full outline-none`}`;

const PrevButton = styled('button')` ${tw`bg-transparent outline-none fixed left-0 z-10 mx-auto top-0 bottom-0`}`;
const NextButton = styled('button')` ${tw`bg-transparent outline-none fixed right-0 z-10 mx-auto top-0 bottom-0`}`;

const FirstSlide = styled('div')` ${tw`bg-grey-200 bg-no-repeat bg-cover bg-center w-full h-screen`}`;
const SecondSlide = styled('div')` ${tw`bg-green-400 bg-no-repeat bg-cover bg-center w-full h-screen`}`;
const ThirdSlide = styled('div')` ${tw`bg-red-200 bg-no-repeat bg-cover bg-center w-full h-screen`}`;

const SlideContent = styled('div')` ${tw`bg-gray-100 fixed p-10 shadow-2xl rounded bottom-0`}`;
const SlideContentTitle = styled('h1')` ${tw`font-normal text-12xl`}`;








