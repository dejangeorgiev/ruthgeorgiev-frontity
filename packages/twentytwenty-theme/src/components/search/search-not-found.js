import React from "react";
import {connect, styled} from "frontity";
import SearchNotFoundIcon from "../global/icons/svg/SearchNotFound.svg"
import tw from 'tailwind.macro';
import Link from "../link";
import SearchForm from "./search-form";
import ArrowDown from "../global/icons/svg/ArrowDown.svg";
import RecommendedPosts from "../post/acf/recommended/posts/RecommendedPosts";
import Archive from "../archive/archive";

const SearchNotFound = ({state, keyword}) => {

    return (
        <>
            <SearchNotFoundContainer>
                <SearchNotFoundContainerImage>
                    <img src={SearchNotFoundIcon} alt="Search is not found in Ruth's archive"/>
                </SearchNotFoundContainerImage>
                <SearchNotFoundContainerContents>
                    <SearchNotFoundEntryTitle>So sorry, we found no <Keyword>{keyword}</Keyword> recipes in our kitchen.</SearchNotFoundEntryTitle>
                    <h4>Glad to see you are looking for "{keyword}" recipes. Soon we'll make some.</h4>
                    <SearchNotFoundIntroText>
                        In meantime you can give it another try through the search form below.
                    </SearchNotFoundIntroText>
                    <SearchForm/>
                    <SearchNotFoundNotFoundNavigation>
                        Go to 👉
                        <SearchNotFoundCustomLink link="/">Homepage</SearchNotFoundCustomLink>
                        <SearchNotFoundCustomLink link="/recipes">Recipes</SearchNotFoundCustomLink>
                        <SearchNotFoundCustomLink link="/category/healthy/">
                            Healthy Food
                        </SearchNotFoundCustomLink>
                        <SearchNotFoundCustomLink link="/category/must-try/">
                            Must Try Recipes
                        </SearchNotFoundCustomLink>
                        {
                            /**
                             <SearchNotFoundScrollDown>

                             <br/> <p>Or scroll down to find more recipes</p>
                             <SearchNotFoundDownArrow src={ArrowDown}/></SearchNotFoundScrollDown>
                             */
                        }
                    </SearchNotFoundNotFoundNavigation>

                </SearchNotFoundContainerContents>
            </SearchNotFoundContainer>
            {
                /**
                 <SearchNotFoundRecommendedPostsTitle>Try our
                 <SearchNotFoundHigLightedText>newest recipes</SearchNotFoundHigLightedText>
                 </SearchNotFoundRecommendedPostsTitle>
                 <Archive/>
                 */
            }
        </>
    );
};

export default connect(SearchNotFound);


const SearchNotFoundEntryTitle = styled.h1`
margin: 0;

@media (min-width: 700px) {
    font - size: 6.4rem !important;
}

@media (min-width: 1200px) {
    font - size: 8.4rem !important;
}
`;

const SearchNotFoundIntroText = styled.div`
margin-top: 2rem;
line-height: 1.5;

@media (min-width: 700px) {
    font - size: 2rem;
    margin-top: 2.5rem;
}
`;

const SearchNotFoundContainer = styled('div')` ${tw`block sm:flex max-w-screen-xl content-center items-center text-center m-auto sm:min-h-full py-10 align-middle`}`;
const SearchNotFoundContainerImage = styled('div')` ${tw`w-full`}`;
const SearchNotFoundContainerContents = styled('div')` ${tw`text-left p-4`}`;

const SearchNotFoundRecommendedPostsTitle = styled('h2')` ${tw`text-gray-800 font-normal text-center px-2 uppercase`}`;
const SearchNotFoundHigLightedText = styled('span')` ${tw`bg-gray-200 font-normal px-5 rounded-full`}`;
const SearchNotFoundScrollDown = styled('span')` ${tw`flex text-center m-auto`}`;
const SearchNotFoundDownArrow = styled('img')` ${tw`w-12 inline-block`}`;
const SearchNotFoundNotFoundNavigation = styled('div')` ${tw`py-10`}`;

const SearchNotFoundCustomLink = styled(Link)`
color: black;
box-shadow: rgb(189, 178, 255) 0px -3px 0px inset;
transition: box-shadow 0.15s cubic-bezier(0.33, 0.66, 0.66, 1) 0s, color 0.15s ease 0s;
&:hover {
    box - shadow: rgb(189, 178, 255) 0px -26px inset;
}
${tw`m-4 inline-block w-max-content`}`;

const Keyword = styled('span')` ${tw`text-red-800`}`;