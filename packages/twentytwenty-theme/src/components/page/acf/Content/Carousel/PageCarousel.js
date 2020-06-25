import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";

import Carousel, {consts} from 'react-elastic-carousel'

import ArrowLeft from "../../../../global/icons/ArrowLeft";
import ArrowRight from "../../../../global/icons/ArrowRight";

const PageCarousel = ({state, actions, libraries, id, carousel}) => {

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
    const CarouselBreakpoints = [
        {width: 1, itemsToShow: 1, itemsToScroll: 1},
        {width: 550, itemsToShow: 1, itemsToScroll: 1},
        {width: 850, itemsToShow: 1, itemsToScroll: 1},
        {width: 1150, itemsToShow: 1, itemsToScroll: 1},
        {width: 1450, itemsToShow: 1, itemsToScroll: 1},
        {width: 1750, itemsToShow: 1, itemsToScroll: 1},
    ];

    return data.isReady ? (
        <CarouselContainer>
            <PageElasticCarousel
                renderArrow={arrow}
                breakPoints={CarouselBreakpoints}
                focusOnSelect={false}
                itemsToShow={1}
                itemsToScroll={5}
                pagination={true}
                showArrows={true}
                enableSwipe={true}
                enableMouseSwipe={true}
                preventDefaultTouchmoveEvent={true}
                autoPlaySpeed={8000}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
            >
                {
                    Object.keys(carousel).map((item, i) => {
                            const CarouselTitle = carousel[item]['contentfieldgroup.content.carousel.item.title'];
                            const CarouselText = carousel[item]['contentfieldgroup.content.carousel.item.text'];

                            const ImageData = carousel[item]['contentfieldgroup.content.carousel.item.image'];
                            const ImageId = ImageData.id;
                            const ImageAlt = ImageData.alt;
                            const ImageSize = ImageData.sizes;
                            const ImageSizeMedium = ImageSize['medium'];

                            const CarouselLink = carousel[item]['contentfieldgroup.content.carousel.item.link'];

                            const CarouselLinkTarget = CarouselLink.target;
                            const CarouselLinkUrl = CarouselLink.url;
                            const CarouselLinkTitle = CarouselLink.title;


                            return <FirstDiv key={i}>
                                <SecondDiv>
                                    <Image
                                        src={ImageSizeMedium}
                                        alt={ImageAlt}
                                    />
                                    <ThirdDiv/>
                                    <FourthDiv>
                                        <FourthDivH2>
                                            {CarouselTitle}
                                        </FourthDivH2>
                                    </FourthDiv>
                                </SecondDiv>
                                <FifthDiv>
                                    <SixthDiv>
                                        <Description>
                                            <DescriptionSpan>{CarouselTitle}</DescriptionSpan>
                                            {CarouselText}
                                        </Description>
                                        <DescriptionLink
                                            href={CarouselLinkUrl}
                                            target={CarouselLinkTarget}
                                        >
                                            <span>{CarouselLinkTitle}</span>
                                            <DescriptionLinkSpan>&#x279c;</DescriptionLinkSpan>
                                        </DescriptionLink>
                                    </SixthDiv>
                                    <FifthDivSvg
                                        viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <polygon points="50,0 100,0 50,100 0,100"/>
                                    </FifthDivSvg>
                                </FifthDiv>
                            </FirstDiv>
                        }
                    )
                }
            </PageElasticCarousel>
        </CarouselContainer>
    ) : null;
};

export default connect(PageCarousel);


export function arrow({type, onClick, isEdge}) {
    return type === consts.PREV ? (
        <ButtonLeft onClick={onClick} disabled={isEdge}>
            <ButtonLeftSpan>&#x279c;</ButtonLeftSpan>
        </ButtonLeft>
    ) : <ButtonRight onClick={onClick} disabled={isEdge}>
        <ButtonRightSpan>&#x279c;</ButtonRightSpan>
        </ButtonRight>
}


const CarouselContainer = styled('div')` ${tw`m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200`}`;
const FirstDiv = styled('div')` min-height: 30rem; ${tw`relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl`}`;
const SecondDiv = styled('div')` min-height: 30rem; ${tw`relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg`}`;
const Image = styled('img')` ${tw`absolute inset-0 w-full h-full object-cover object-center`}`;
const ThirdDiv = styled('div')` ${tw`absolute inset-0 w-full h-full bg-indigo-900 opacity-75`}`;
const FourthDiv = styled('div')` ${tw`absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white`}`;
const FifthDiv = styled('div')` ${tw`w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg`}`;
const SixthDiv = styled('div')` ${tw`p-12 md:pr-24 md:pl-16 md:py-12`}`;
const Description = styled('p')` ${tw`text-gray-600`}`;
const DescriptionSpan = styled('span')` ${tw`text-gray-900`}`;
const DescriptionLink = styled('a')` ${tw`flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900`}`;
const DescriptionLinkSpan = styled('span')` ${tw`text-xs ml-1`}`;
const FourthDivH2 = styled('h2')` ${tw`w-full h-24 text-center`}`;
const FifthDivSvg = styled('svg')` ${tw`hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12`}`;
const ButtonLeft = styled('button')` transform: scale(-1); ${tw`top-0 bottom-0 m-auto left-0 bg-white hover:bg-gray-900 rounded-full shadow-md h-16 w-16 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 cursor-pointer focus:outline-none focus:shadow-outline`}`;
const ButtonLeftSpan = styled('span')` ${tw`block text-3xl px-4`}`;
const ButtonRight = styled('button')` ${tw`top-0 bottom-0 m-auto right-0 bg-white rounded-full shadow-md hover:bg-gray-900 h-16 w-16 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none cursor-pointer focus:shadow-outline`}`;
const ButtonRightSpan = styled('span')` ${tw`block text-3xl px-4`}`;
const PageElasticCarousel = styled(Carousel)` max-height:330px ${tw``}`;






