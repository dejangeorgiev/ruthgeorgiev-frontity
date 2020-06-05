import React, {Fragment} from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Article from '../../../../post/post-item-preview'
import FeaturedMedia from "../../../featured-media";


const RecommendedPost = ({state, title}) => {

    //const data = state.source.get(state.router.link);
    // Get the data of the post.
    //const post = state.source[data.type][data.id];


    return (
        <Post>
            <h1>{title}</h1>
            <ImageContainer>

            </ImageContainer>
        </Post>
    );
};

export default connect(RecommendedPost);

const Item = styled('div')` ${tw``}`;
const Post = styled('div')` ${tw`m-3 max-w-2xl sm:inline-block rounded overflow-hidden shadow-lg`}`;

const ImageContainer = styled('div')` ${tw`md:flex-shrink-0 w-full`}`;

const Image = styled('img')` ${tw`rounded-lg rounded-r-none m-0 w-full`}`;
