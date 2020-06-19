import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import Carousel, {consts} from 'react-elastic-carousel'
import ArrowRight from "../../global/icons/ArrowRight";
import ArrowLeft from "../../global/icons/ArrowLeft";
import Media from "../../post/featured-media";

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
        backgroundImage: `url(${Food})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    };

    const SecondSlideStyles = {
        backgroundImage: `url(${Brunch})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    };

    const ThirdSlideStyles = {
        backgroundImage: `url(${Brekkie})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
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
                disableArrowsOnEnd={false}
                preventDefaultTouchmoveEvent={true}
                enableAutoPlay={true}
                autoPlaySpeed={8000}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
            >
                <FirstSlide style={FirstSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Recipes</SlideContentTitle>
                        <p>A variety of recipes, vegan, vegetarian, healthy, Asian, European...</p>
                    </SlideContent>
                </FirstSlide>

                <SecondSlide style={SecondSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Travel</SlideContentTitle>
                        <p>A variety of travel tips, from Asia till Europe...</p>
                    </SlideContent>
                </SecondSlide>

                <ThirdSlide style={ThirdSlideStyles}>
                    <SlideContent>
                        <SlideContentTitle>Gardening</SlideContentTitle>
                        <p>A variety of Gardening tips, from plants till foods...</p>
                    </SlideContent>
                </ThirdSlide>
            </HomeCarousel>


        </FrontPageContainer>
    ) : null;
};

export default connect(FrontPage);

export function arrow({type, onClick, isEdge}) {
    return type === consts.PREV ? (
        <PrevButton onClick={onClick} disabled={isEdge}><ArrowLeft/></PrevButton>
    ) : <NextButton onClick={onClick} disabled={isEdge}><ArrowRight/></NextButton>
}

const FrontPageContainer = styled('div')` ${tw`flex flex-wrap outline-none fixed w-full top-0 h-full min-h-full`}`;

const HomeCarousel = styled(Carousel)` ${tw`p-0 m-0 relative w-full h-full min-h-full outline-none`}`;

const PrevButton = styled('button')` ${tw`bg-transparent hover:cursor-pointer outline-none fixed left-0 z-10 mx-auto top-0 bottom-0`}`;
const NextButton = styled('button')` ${tw`bg-transparent hover:cursor-pointer outline-none fixed right-0 z-10 mx-auto top-0 bottom-0`}`;

const FirstSlide = styled('div')` ${tw`bg-grey-200 bg-no-repeat bg-cover bg-center w-full h-screen`}`;
const SecondSlide = styled('div')` ${tw`bg-green-400 bg-no-repeat bg-cover bg-center w-full h-screen`}`;
const ThirdSlide = styled('div')` ${tw`bg-red-200 bg-no-repeat bg-cover bg-center w-full h-screen`}`;

const SlideContent = styled('div')` ${tw`bg-gray-100 fixed px-10 shadow-2xl rounded-full sm:bottom-10 `}`;
const SlideContentTitle = styled('h1')` ${tw`font-normal text-10xl`}`;








