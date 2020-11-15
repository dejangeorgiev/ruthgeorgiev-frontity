import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import FeaturedMedia from "../post/featured-media";
import PageCarousel from "./acf/Content/Carousel/PageCarousel";
import Text from "./acf/Content/Text"
import Card from "./acf/Content/Card"
import HighlightedLink from "./acf/Content/HighlightedLink";
import ProfileCard from "./acf/Content/ProfileCard";
import InstaFeed from "./acf/Content/InstaFeed";
import Title from "./acf/Content/Title"
import PinterestWidget from "./acf/Content/PinterestWidget";


const Page = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];

    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    const pageContent = page.acf['contentfieldgroup.content'];

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <div>
            {page.featured_media !== 0 && (
                <FeaturedImage id={page.featured_media}/>
            )}
            <SectionContainer>
                {Object.keys(pageContent)
                    .map(function (key, i) {

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.carousel') {
                            const Carousel = pageContent[key]['contentfieldgroup.content.carousel.item'];
                            return <PageCarousel
                                key={i}
                                id={page.id}
                                carousel={Carousel}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.image') {
                            return <h1 key={key}>IMAGE</h1>
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.accordion') {
                            return <h1 key={key}>Accordion</h1>
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.text') {
                            return <Text key={key}
                                         title={pageContent[key]['contentfieldgroup.content.text.title']}
                                         text={pageContent[key]['contentfieldgroup.content.text.text']}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.card') {
                            return <Card key={key}
                                         name={pageContent[key]['contentfieldgroup.content.card.name']}
                                         description={pageContent[key]['contentfieldgroup.content.card.description']}
                                         highlightedText={pageContent[key]['contentfieldgroup.content.card.highlighted_text']}
                                         imageID={pageContent[key]['contentfieldgroup.content.card.image'].ID}
                                         url={pageContent[key]['contentfieldgroup.content.card.url']}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.highlightedlink') {
                            return <HighlightedLink key={key}
                                                    target={pageContent[key]['contentfieldgroup.content.highlightedlink.link'].target}
                                                    title={pageContent[key]['contentfieldgroup.content.highlightedlink.link'].title}
                                                    url={pageContent[key]['contentfieldgroup.content.highlightedlink.link'].url}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.profile') {
                            return <ProfileCard key={key}
                                                name={pageContent[key]['contentfieldgroup.content.profile.name']}
                                                image={pageContent[key]['contentfieldgroup.content.profile.image']}
                                                profession={pageContent[key]['contentfieldgroup.content.profile.profession']}
                                                location={pageContent[key]['contentfieldgroup.content.profile.location']}
                                                description={pageContent[key]['contentfieldgroup.content.profile.description']}
                                                button={pageContent[key]['contentfieldgroup.content.profile.button']}
                                                facebook={pageContent[key]['contentfieldgroup.content.profile.facebook']}
                                                instagram={pageContent[key]['contentfieldgroup.content.profile.instagram']}
                                                twitter={pageContent[key]['contentfieldgroup.content.profile.twitter']}
                                                youtube={pageContent[key]['contentfieldgroup.content.profile.youtube']}
                                                linkedin={pageContent[key]['contentfieldgroup.content.profile.linkedin']}
                                                pinterest={pageContent[key]['contentfieldgroup.content.profile.pinterest']}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.instafeed') {
                            return <InstaFeed key={key}
                                              title={pageContent[key]['contentfieldgroup.content.instafeed.title']}
                                              posts={pageContent[key]['contentfieldgroup.content.instafeed.posts']}
                            />
                        }

                        if (pageContent[key].acf_fc_layout === 'contentfieldgroup.content.title') {
                            return <Title key={key}
                                         title={pageContent[key]['contentfieldgroup.content.title.title']}
                            />
                        }
                    })}
                {/*
                    <PinterestWidget title="Check my Pinterest"
                                     profile="https://www.pinterest.com/ruthgeorgiev/"/>
                    <a data-pin-do="embedPin" data-pin-width="medium" href="https://www.pinterest.com/pin/99360735500167749/"></a>

               */}

                {
                    page.content && (
                        <PostInner size="medium">
                            <EntryContent>
                                <Html2React html={page.content.rendered}/>
                            </EntryContent>
                        </PostInner>
                    )
                }

            </SectionContainer>
        </div>
    ) : null;
};

export default connect(Page);

const maxWidths = {
    thin: "58rem",
    small: "80rem",
    medium: "100rem",
    large: "120rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["large"];

const FeaturedImage = styled(FeaturedMedia)`
margin-top: 0 !important;
position: relative;

> div {
position: relative;
}

&:before {
background: #fff;
content: "";
display: block;
position: absolute;
bottom: 50%;
left: 0;
right: 0;
top: 0;
}
`;

const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 4rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 8rem);
  }
`;

const PostInner = styled(SectionContainer)`
  padding-top: 5rem;
  @media (min-width: 700px) {
    padding-top: 8rem;
  }
`;

const EntryContent = styled.div`
  line-height: 1.5;
  letter-spacing: normal;
  @media (min-width: 700px) {
    font-size: 2.1rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: 2em 0;
    max-width: 100%;
  }
`;
