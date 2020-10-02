import React from "react";
import {connect, styled} from "frontity";
import Link from "../link";
import FeaturedMedia from "./featured-media";
import PostMeta from "./post-meta";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";
import tw from 'tailwind.macro';

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItemPreview = ({state, item, libraries, showExcerpt, showMedia = true,}) => {
    // Get all categories
    const allCategories = state.source.category;
    /**
     * The item's categories is an array of each category id
     * So, we'll look up the details of each category in allCategories
     */
    const categories =
        item.categories && item.categories.map((catId) => allCategories[catId]);

    // Get all tags
    const allTags = state.source.tag;
    /**
     * The item's categories is an array of each tag id
     * So, we'll look up the details of each tag in allTags
     */
    const tags = item.tags && item.tags.map((tagId) => allTags[tagId]);

    const content = showExcerpt ? item.excerpt : item.content;
    const {Component: Html2React} = libraries.html2react;
    return (
        <Post>
            {/*
               * If the want to show featured media in the
               * list of featured posts, we render the media.
            */}
            {state.theme.featuredMedia.showOnArchive && showMedia && (
                <FeaturedMediaContainer>
                    <PostLink link={item.link}>
                        <FeaturedMediaImage id={item.featured_media}/>
                    </PostLink>
                </FeaturedMediaContainer>
            )}

            <PostHeader>
                <SectionContainer>
                    {/* If the post has categories, render the categories */}
                    {item.categories && <PostCategories categories={categories}/>}

                    {/* The clickable heading for the post */}
                    <PostLink link={item.link}>
                        <PostTitle
                            className="heading-size-1"
                            dangerouslySetInnerHTML={{__html: item.title.rendered}}
                        />
                    </PostLink>

                    {/* If the post has an excerpt (short summary text), we render it */}
                    {content && (
                        <PostInner size="thin">
                            {/* TODO: Change this to HTML2React */}
                            {/* dangerouslySetInnerHTML={{ __html: content.rendered }} */}

                            <PostLink link={item.link}>
                                <EntryContent>
                                    <Html2React html={content.rendered}/>
                                </EntryContent>
                            </PostLink>

                            {/* If the post has tags, render it */}
                            {item.tags && <PostTags tags={tags}/>}
                        </PostInner>
                    )}

                    {/* The post's metadata like author, publish date, and comments */}
                    <PostMeta item={item}/>
                </SectionContainer>
            </PostHeader>
        </Post>
    );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItemPreview);

// All styles :)

const Post = styled('div')` ${tw`m-3 max-w-2xl sm:inline-block rounded overflow-hidden shadow-lg bg-white`}`;

const FeaturedMediaContainer = styled('div')` ${tw`md:flex-shrink-0 w-full`}`;

const FeaturedMediaImage = styled(FeaturedMedia)` ${tw`rounded-lg rounded-r-none m-0 w-full`}`;

const PostHeader = styled.header``;

// Header sizes bases on style.css
const maxWidths = {
    thin: "58rem",
    small: "80rem",
    medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

const SectionContainer = styled('div')` ${tw`text-left mt-4 md:mt-0 md:ml-6`}`;

const PostTitle = styled('h2')`${tw`block mt-1 leading-tight font-semibold pl-4 pr-2 pt-3 mb-0 text-gray-900 hover:underline`}`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

const PostInner = styled('div')` ${tw`text-left mx-4 md:mt-0 md:ml-6`}`;


export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 58rem;
  font-family: "Bw Quinta Pro", Garamond, "Times New Roman", sans-serif;
  letter-spacing: normal;
  margin: 1rem 0;
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




