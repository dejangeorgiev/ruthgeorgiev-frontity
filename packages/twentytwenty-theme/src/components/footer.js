import React from "react";
import {styled, connect} from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import tw from "tailwind.macro";

// Component that provides scroll to top functionality
const BackToTop = () => {
    // scroll to top function
    const scrollToTop = (event) => {
        // prevent the default behaviors
        event.preventDefault();
        // scroll to the top smoothly
        scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

    return (
        <a href="#site-header" onClick={scrollToTop} style={{cursor: "pointer"}}>
            <span style={{marginRight: 8}}>To the top</span>
            <span className="arrow" aria-hidden="true">
        ↑
      </span>
        </a>
    );
};

const Footer = ({state}) => {
    const currentYear = new Date().getFullYear();
    const {footerBg} = state.theme.colors;
    return (

        <SiteFooter bg={footerBg} role="contentinfo">

            <SiteFooterSubscribe>
                <SiteFooterSubscribeContainer>
                    <SiteFooterSubscribeText>
                        Join 31,000+ other and never miss out on new recipes, videos, tips and more.
                    </SiteFooterSubscribeText>

                    <SiteFooterSubscribeFormDiv1>
                        <SiteFooterSubscribeFormDiv2>
                            <SiteFooterSubscribeFormDiv3>
                                <SiteFooterSubscribeFormInput
                                    type='email'
                                    placeholder='Enter your email'
                                />
                                <SiteFooterSubscribeFormButton>subscribe</SiteFooterSubscribeFormButton>
                            </SiteFooterSubscribeFormDiv3>
                        </SiteFooterSubscribeFormDiv2>
                    </SiteFooterSubscribeFormDiv1>
                </SiteFooterSubscribeContainer>
            </SiteFooterSubscribe>

            <SiteFooterInner>
                <Credits>
                    <Copyright>
                        &copy; {currentYear}{" "}
                        <Link link={"/"}>{state.frontity.title}</Link>
                    </Copyright>
                    <PoweredBy>Cooking with love & travelling with passion</PoweredBy>
                </Credits>
                <BackToTop/>
            </SiteFooterInner>
        </SiteFooter>
    );
};

export default connect(Footer);


const Equipment = styled('div')` ${tw`md:flex bg-white rounded-lg p-6 shadow-md my-6 relative`}`;

const SiteFooterInner = styled(SectionContainer)`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  border-color: #dcd7ca;
  border-style: solid;
  border-width: 0;

  background-color: ${(props) => props.bg};
  color: #000000;

  @media (min-width: 700px) {
 
    font-size: 1.8rem;
  
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ${tw`m-0 p-20 text-gray-100 bg-gray-900`}
`;

const Credits = styled.div`
  @media (min-width: 700px) {
    display: flex;
  }
`;

const Copyright = styled.p`
  font-weight: 600;
  margin: 0;

  @media (min-width: 700px) {
    font-weight: 700;
  }
`;

const PoweredBy = styled.p`
  color: #6d6d6d;
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;


const SiteFooterSubscribe = styled('div')`  ${tw`flex justify-center px-4 text-gray-100 bg-gray-800`}`;
const SiteFooterSubscribeContainer = styled('div')`  ${tw`py-6`}`;
const SiteFooterSubscribeText = styled('h2')`  ${tw`text-center font-bold`}`;
const SiteFooterSubscribeFormDiv1 = styled('div')`  ${tw`flex justify-center mt-6`}`;
const SiteFooterSubscribeFormDiv2 = styled('div')`  ${tw`bg-white rounded-lg`}`;
const SiteFooterSubscribeFormDiv3 = styled('div')`  ${tw`flex flex-wrap justify-between`}`;
const SiteFooterSubscribeFormInput = styled('input')`  ${tw`m-1 p-2 appearance-none rounded-full border-none text-gray-700 outline-none`}`;
const SiteFooterSubscribeFormButton = styled('button')`  ${tw`w-full m-1 p-2 bg-gray-800 text-gray-100 rounded-lg font-normal uppercase lg:w-auto`}`;

