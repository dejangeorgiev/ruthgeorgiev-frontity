import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import TwitterIcon from "../icons/social-media/TwitterIcon";
import FacebookIcon from "../icons/social-media/FacebookIcon";
import InstagramIcon from "../icons/social-media/InstagramIcon";
import PinterestIcon from "../icons/social-media/PinterestIcon";
import YoutubeIcon from "../icons/social-media/YoutubeIcon";

const Author = ({author, state, actions}) => {
    console.log(author);

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    return (
        <AuthorContainer>
            <AuthorImage src={author.avatar_urls[96]} alt={author.name} />
            <AboutContainer>
                <AuthorName>{author.name}</AuthorName>
                <AuthorTitle>{author.acf['userfieldgroup.title']}</AuthorTitle>
                <AuthorDescription>{author.description}</AuthorDescription>
            </AboutContainer>
            <AuthorSocialMediaLink
                href="https://www.facebook.com/ruthgeorgiev/"
                target="_blank"
                rel="noopener noreferrer"
                social="facebook">
                <FacebookIcon/>
            </AuthorSocialMediaLink>
            <AuthorSocialMediaLink
                href="https://www.instagram.com/ruthgeorgiev/"
                target="_blank"
                rel="noopener noreferrer">
                <InstagramIcon/>
            </AuthorSocialMediaLink>
            <AuthorSocialMediaLink
                href="https://www.pinterest.ch/ruthgeorgiev/"
                target="_blank"
                rel="noopener noreferrer">
                <PinterestIcon/>
            </AuthorSocialMediaLink>
            <AuthorSocialMediaLink
                href="https://www.youtube.com/ruthgeorgiev/"
                target="_blank"
                rel="noopener noreferrer">
                <YoutubeIcon/>
            </AuthorSocialMediaLink>
            <AuthorSocialMediaLink
                href="https://twitter.com/GeorgievRuth"
                target="_blank"
                rel="noopener noreferrer">
                <TwitterIcon/>
            </AuthorSocialMediaLink>
        </AuthorContainer>
    )
};

export default connect(Author);

const AuthorContainer = styled('div')` ${tw`md:flex bg-white rounded-lg p-6`}`;
const AuthorImage = styled('img')` ${tw`h-48 w-48 rounded-full mx-auto md:mx-0 md:mr-8`}`;
const AboutContainer = styled('div')` ${tw`text-center md:text-left`}`;
const AuthorName = styled('h2')` ${tw`m-0 text-6xl`}`;
const AuthorTitle = styled('div')` ${tw`text-3xl text-purple-500 pb-6`}`;
const AuthorDescription = styled('div')` ${tw`font-body font-normal leading-tight tracking-normal text-3xl max-w-4xl mb-4`}`;
const AuthorSocialMediaLink = styled('a')` ${tw`px-1`}`;

/**
<div className="md:flex bg-white rounded-lg p-6">
 <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
 <div className="text-center md:text-left">
 <h2 className="text-lg">Erin Lindford</h2>
 <div className="text-purple-500">Product Engineer</div>
 <div className="text-gray-600">erinlindford@example.com</div>
 <div className="text-gray-600">(555) 765-4321</div>
 </div>
 </div>
**/