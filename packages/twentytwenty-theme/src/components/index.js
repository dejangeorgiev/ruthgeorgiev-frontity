import {connect, Slot, Global, Head, styled} from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import Title from "./page-meta-title";
import PageError from "./page-error";
import Page from "./page"
import Travel from "./travel";
import FrontPage from "./page/FrontPage";
import FooterWithLinksAndTags from "./global/footer/FooterWithLinksAndTags";
import NewsletterSubscription from "./global/newsletter/NewsletterSubscription";
import SearchAlgolia from "./search/search-algolia";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    const parse = libraries.source.parse(state.router.link);
    // Check if the url is a search type
    const isSearch = Boolean(parse.query["s"]);

    return (
        <>
            {/* Add global styles for the whole site, like body or a's or font-faces.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
            <Global styles={globalStyles(state.theme.colors)}/>
            <FontFaces/>

            {/* Add some metatags to the <head> of the HTML. */}

            <Title/>

            {/* Accessibility: Provides ability to skip to main content */}
            <SkipLink as="a" href="#main">
                Skip to main content
            </SkipLink>

            <div style={{minHeight: "calc(100vh - 190px)"}}>
                {/* Add the header of the site. */}
                <Header/>

                {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}

                <Main id="main">

                    <Switch>
                        <Loading when={data.isFetching}/>
                        <SearchResults when={isSearch}/>
                        <FrontPage when={data.isHome}/>
                        <Archive when={data.isArchive}/>
                        <Page when={data.isPage}/>
                        <Travel when={data.isTravel} />
                        <Post when={data.isPostType}/>
                        <PageError when={data.isError}/>
                    </Switch>
                </Main>
            </div>
            <NewsletterSubscription/>
            <FooterWithLinksAndTags/>
            <Footer/>
        </>
    );
};

export default connect(Theme);

const Main = styled.main`
  display: block;
  
  @media (max-width: 640px) {
margin-top: 80px;
}
`;
