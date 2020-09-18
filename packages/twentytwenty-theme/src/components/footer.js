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
            <SiteFooterInner>
                <Credits>
                    <Copyright>
                        &copy; {currentYear}{" "}
                        <Link link={"/author/ruth-georgiev/"}>{state.frontity.title}</Link>
                    </Copyright>
                    <PoweredBy>Cooking with 🤍</PoweredBy>
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
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;

