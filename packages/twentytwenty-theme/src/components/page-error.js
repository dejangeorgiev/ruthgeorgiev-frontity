import React from "react";
import {styled, connect} from "frontity";
import SearchForm from "./search/search-form";
import SectionContainer from "./styles/section-container";
import NotfoundIcon from "./global/icons/svg/NotFoundIcon.svg"
import tw from "tailwind.macro";
import RecommendedPosts from "./post/acf/recommended/posts/RecommendedPosts";
import Link from "./link";
import ArrowDown from "./global/icons/svg/ArrowDown.svg"


const description404 = (
    <>
        The page you were looking for could not be found. It might have been
        removed, renamed, or did not exist in the first place,
        <br/> or my husband was sleepy when he coded this part.
        <br/> Let's try to fix this...
    </>
);

const description = (
    <>
        Don&apos;t panic! Seems like you encountered an error. If this persists,
        <a href="https://ruthgeorgiev.com"> let us know </a> or try refreshing
        your browser. You can also search for:
    </>
);

// The Error page component
const ErrorPage = ({state}) => {
    const data = state.source.get(state.router.link);

    const title = "Oops, something bad happened";
    const title404 = "Oops! 404";

    return (
        <div>
            <Container>
                <ContainerImage>
                    <img src={NotfoundIcon} alt="404 - This Page is not found on our website."/>
                </ContainerImage>
                <ContainerContents>
                    <EntryTitle>{data.is404 ? title404 : title}</EntryTitle>
                    <IntroText>{data.is404 ? description404 : description}</IntroText>
                    <SearchForm/>
                    <NotFoundNavigation>
                        Go to 👉
                        <CustomNotFoundLink link="/">Homepage</CustomNotFoundLink>
                        <CustomNotFoundLink link="/recipes">Recipes</CustomNotFoundLink>
                        <CustomNotFoundLink link="/?s=healthy">Healthy Food</CustomNotFoundLink>
                        <CustomNotFoundLink link="/category/must-try/">Must Try Recipes</CustomNotFoundLink>
                        <ScrollDown>
                            <br/> <p>Or scroll down to find more recipes</p> <DownArrow
                            src={ArrowDown}/></ScrollDown>
                    </NotFoundNavigation>

                </ContainerContents>
            </Container>
            <RecommendedPostsTitle>Try our <HigLightedText>newest recipes</HigLightedText></RecommendedPostsTitle>
            <RecommendedPosts />
        </div>
    );
};

export default connect(ErrorPage);

export const EntryTitle = styled.h1`
  margin: 0;

  @media (min-width: 700px) {
    font-size: 6.4rem !important;
  }

  @media (min-width: 1200px) {
    font-size: 8.4rem !important;
  }
`;

const IntroText = styled.div`
  margin-top: 2rem;
  line-height: 1.5;

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const Container = styled('div')` ${tw`block sm:flex max-w-screen-xl content-center items-center text-center m-auto sm:min-h-full py-10 align-middle`}`;
const ContainerImage = styled('div')` ${tw`w-full`}`;
const ContainerContents = styled('div')` ${tw`text-left p-4`}`;


const RecommendedPostsTitle = styled('h2')` ${tw`text-gray-800 font-normal text-center px-2 uppercase`}`;
const HigLightedText = styled('span')` ${tw`bg-gray-200 font-normal px-5 rounded-full`}`;
const ScrollDown = styled('span')` ${tw`flex text-center m-auto`}`;
const DownArrow = styled('img')` ${tw`w-12 inline-block`}`;
const NotFoundNavigation = styled('div')` ${tw`py-10`}`;

const CustomNotFoundLink = styled(Link)`
    color: black;
        box-shadow: rgb(189, 178, 255) 0px -3px 0px inset;
        transition: box-shadow 0.15s cubic-bezier(0.33, 0.66, 0.66, 1) 0s, color 0.15s ease 0s;
        &:hover {
                box-shadow: rgb(189, 178, 255) 0px -26px inset;
        }
 ${tw`m-4 inline-block w-max-content`}`;