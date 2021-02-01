import {styled, connect, fetch} from "frontity";
import React, {useEffect, useState} from "react";
import tw from "tailwind.macro";
import Carousel, {consts} from 'react-elastic-carousel'
import ArrowRight from "../../global/icons/ArrowRight";
import ArrowLeft from "../../global/icons/ArrowLeft";
import Link from '../../link'
import Archive from "../../archive"
import Loading from "../../loading"


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
        backgroundImage: `url(https://admin.ruthgeorgiev.com/wp-content/uploads/2020/06/food-scaled.jpg)`,
        backgroundSize: 'cover',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const SecondSlideStyles = {
        backgroundImage: `url(https://admin.ruthgeorgiev.com/wp-content/uploads/2020/06/brekkie-scaled.jpg)`,
        backgroundSize: 'cover',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const ThirdSlideStyles = {
        backgroundImage: `url(https://admin.ruthgeorgiev.com/wp-content/uploads/2020/06/brunch-scaled.jpg)`,
        backgroundSize: 'cover',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const [loading, setLoading] = useState(true);

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("").then(response => {
            setLoading(false);
        })
    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <>
            {loading && (<Loading/>)}
            {!loading && (
                <>
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
                            <FirstSlide style={FirstSlideStyles}/>
                            <SecondSlide style={SecondSlideStyles}/>
                            <ThirdSlide style={ThirdSlideStyles}/>
                        </HomeCarousel>
                        <HomeTeaser>
                            <Title>Cooking Recipes</Title>
                            <SubTitle>That your friends & family will love</SubTitle>
                            <p>Here you can find a collection of cooking recipes & healthy tips.</p>
                            <SlideContentButton link='/recipes'>Go to the recipes</SlideContentButton>
                        </HomeTeaser>

                    </FrontPageContainer>
                    <Archive/>
                </>
            )}
        </>

    ) : null;
};

export default connect(FrontPage);

export function arrow({type, onClick, isEdge}) {
    return type === consts.PREV ? (
        <PrevButton onClick={onClick} disabled={isEdge}><ArrowLeft/></PrevButton>
    ) : <NextButton onClick={onClick} disabled={isEdge}><ArrowRight/></NextButton>
}

const FrontPageContainer = styled('div')` ${tw`flex flex-wrap outline-none w-full h-1/2`}`;
const HomeCarousel = styled(Carousel)` ${tw`p-0 m-0 relative w-full h-1/2 outline-none`}`;
const PrevButton = styled('button')` ${tw`bg-transparent hover:cursor-pointer outline-none mx-auto`}`;
const NextButton = styled('button')` ${tw`bg-transparent hover:cursor-pointer outline-none mx-auto`}`;
const FirstSlide = styled('div')` ${tw`bg-grey-200 bg-no-repeat bg-cover bg-center w-full`}`;
const SecondSlide = styled('div')` ${tw`bg-green-400 bg-no-repeat bg-cover bg-center w-full`}`;
const ThirdSlide = styled('div')` ${tw`bg-red-200 bg-no-repeat bg-cover bg-center w-full`}`;
const SlideContentButton = styled(Link)`
                ${tw`bg-transparent hover:bg-gray-700 text-black-700 font-normal hover:text-white py-2 px-4 border-solid border-2 border-gray-700 hover:border-transparent rounded`}`;
const HomeTeaser = styled('div')` ${tw`relative w-full text-center p-5 pb-20 m-auto shadow-xl`}`;

const SectionTitle = styled('h2')` ${tw`text-gray-800 mx-auto my-12 font-normal text-center py-6 px-2 uppercase`}`;
const Title = styled('h1')` ${tw`text-gray-800 p-6 m-0 uppercase`}`;
const SubTitle = styled('h2')` ${tw`text-gray-800 pb-6 m-0 uppercase`}`;
