import React from "react";
import {connect, styled} from "frontity";
import SuperChef from "../global/icons/svg/SuperChef.svg"
import tw from 'tailwind.macro';
import ArrowDown from "../global/icons/svg/ArrowDown.svg";
import Link from "../link";


const SearchFound = ({keyword, total}) => {

    let isMoreThanOne = total > 1;


    return (
        <>
            <SearchFoundContainer>
                <SearchFoundContainerImage>
                    <img src={SuperChef} alt="Ruth Georgiev - Super Chef - Search found in Ruth's archive"/>
                </SearchFoundContainerImage>
                <SearchFoundContainerContents>
                    <SearchFoundEntryTitle>Voilà! We found the best
                        {(isMoreThanOne) ? <Keyword> {total} {keyword} recipes </Keyword> :
                            <Keyword> {keyword} recipe </Keyword>}
                        for you.</SearchFoundEntryTitle>
                    <h4>Let's cook. 👩‍🍳</h4>
                    <SearchFoundIntroText>
                        Happy to see that you are interested to have some of the <Keyword>"{keyword}"</Keyword> related
                        recipes in your kitchen.
                    </SearchFoundIntroText>
                    <SearchFoundNavigation>
                        Let me know how you made it on 👉
                        <SearchFoundCustomLink href="https://www.instagram.com/ruthgeorgiev/" target="_blank"
                                               rel="noopener noreferrer">Instagram</SearchFoundCustomLink>
                        <SearchFoundCustomLink href="https://www.facebook.com/ruthgeorgiev" target="_blank"
                                               rel="noopener noreferrer">Facebook</SearchFoundCustomLink>
                        <SearchFoundCustomLink href="https://twitter.com/GeorgievRuth" target="_blank"
                                               rel="noopener noreferrer">
                            Twitter
                        </SearchFoundCustomLink>
                    </SearchFoundNavigation>
                </SearchFoundContainerContents>
            </SearchFoundContainer>
        </>
    );
};

export default connect(SearchFound);


const SearchFoundEntryTitle = styled.h1`
  margin: 0;

  @media (min-width: 700px) {
    font-size: 6.4rem !important;
  }

  @media (min-width: 1200px) {
    font-size: 8.4rem !important;
  }
`;

const SearchFoundIntroText = styled.div`
  margin-top: 2rem;
  line-height: 1.5;

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const SearchFoundContainer = styled('div')` ${tw`block sm:flex max-w-screen-xl content-center items-center text-center m-auto sm:min-h-full py-10 align-middle`}`;
const SearchFoundContainerImage = styled('div')` ${tw`w-full`}`;
const SearchFoundContainerContents = styled('div')` ${tw`text-left p-4`}`;
const Keyword = styled('span')` ${tw`text-green-800`}`;

const SearchFoundNavigation = styled('div')` ${tw`py-2`}`;
const SearchFoundCustomLink = styled('a')`
    color: black;
        box-shadow: rgb(189, 178, 255) 0px -3px 0px inset;
        transition: box-shadow 0.15s cubic-bezier(0.33, 0.66, 0.66, 1) 0s, color 0.15s ease 0s;
        &:hover {
                box-shadow: rgb(189, 178, 255) 0px -26px inset;
        }
 ${tw`m-4 inline-block w-max-content`}`;
