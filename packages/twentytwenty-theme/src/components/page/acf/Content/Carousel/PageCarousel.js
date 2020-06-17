import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";

import Carousel, {consts} from 'react-elastic-carousel'


const PageCarousel = ({state, actions, libraries, id,carousel}) => {

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

    console.log(carousel)


    return data.isReady ? (
        <CarouselContainer>

            {
                Object.keys(carousel).map( (item, i) =>{
                        const ImageId = carousel[item]['contentfieldgroup.content.carousel.item.image'];
                        const ImageAlt = carousel[item]['contentfieldgroup.content.carousel.item.image']['alt'];

                        return <FirstDiv key={i}>
                            <SecondDiv>
                                <Image src="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/05/ruth-georgiev-kitchen.jpg"
                                       alt=""/>
                                <ThirdDiv/>
                                <FourthDiv>
                                    <FourthDivH2>
                                        Ruth
                                    </FourthDivH2>
                                </FourthDiv>
                            </SecondDiv>
                            <FifthDiv>
                                <SixthDiv>
                                    <Description>
                                        <DescriptionSpan>Ruth Georgiev</DescriptionSpan> is a Here goes description.
                                    </Description>
                                    <DescriptionLink href="/">
                                        <span>Learn more about our users</span>
                                        <DescriptionLinkSpan>&#x279c;</DescriptionLinkSpan>
                                    </DescriptionLink>
                                </SixthDiv>
                                <FifthDivSvg
                                    viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <polygon points="50,0 100,0 50,100 0,100"/>
                                </FifthDivSvg>
                            </FifthDiv>
                            <ButtonLeft>
                                <ButtonLeftSpan>&#x279c;</ButtonLeftSpan>
                            </ButtonLeft>
                            <ButtonRight>
                                <ButtonRightSpan>&#x279c;</ButtonRightSpan>
                            </ButtonRight>
                        </FirstDiv>

                    }
                )
            }



        </CarouselContainer>
    ) : null;
};

export default connect(PageCarousel);


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
const FourthDivH2 = styled('h2')` ${tw`w-full h-24`}`;
const FifthDivSvg = styled('svg')` ${tw`hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12`}`;
const ButtonLeft = styled('button')` ${tw`absolute top-0 bottom-0 m-auto left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline`}`;
const ButtonLeftSpan = styled('span')` ${tw`block`}`;
const ButtonRight = styled('button')` ${tw`absolute top-0 bottom-0 m-auto right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline`}`;
const ButtonRightSpan = styled('span')` ${tw`block`}`;






