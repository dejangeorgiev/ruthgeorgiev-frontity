import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import TwitterIcon from "../icons/social-media/TwitterIcon";
import FacebookIcon from "../icons/social-media/FacebookIcon";
import InstagramIcon from "../icons/social-media/InstagramIcon";
import PinterestIcon from "../icons/social-media/PinterestIcon";
import YoutubeIcon from "../icons/social-media/YoutubeIcon";
import LinkedinIcon from "../icons/social-media/LinkedinIcon"
import LocationMarker from "../icons/svg/Location.svg"

const Author = ({author, state, actions}) => {
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
            <AuthorImage src={author.avatar_urls[96]} alt={author.name}/>
            <AboutContainer>
                {author.name && (
                    <AuthorName>{author.name}</AuthorName>
                )}

                {author.acf['userfieldgroup.title'] && (
                    <AuthorTitle>{author.acf['userfieldgroup.title']}</AuthorTitle>
                )}
                {author.acf['userfieldgroup.location'] && (
                    <Location>
                        <Marker src={LocationMarker}/>
                        <LocationTitle>{author.acf['userfieldgroup.location']}</LocationTitle>
                    </Location>
                )}
                {author.description && (
                    <AuthorDescription>{author.description}</AuthorDescription>
                )}


            </AboutContainer>

            {author.acf['userfieldgroup.facebook'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.facebook']}
                    target="_blank"
                    rel="noopener noreferrer"
                    social="facebook">
                    <FacebookIcon/>
                </AuthorSocialMediaLink>
            )}

            {author.acf['userfieldgroup.instagram'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.instagram']}
                    target="_blank"
                    rel="noopener noreferrer">
                    <InstagramIcon/>
                </AuthorSocialMediaLink>
            )}

            {author.acf['userfieldgroup.pinterest'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.pinterest']}
                    target="_blank"
                    rel="noopener noreferrer">
                    <PinterestIcon/>
                </AuthorSocialMediaLink>
            )}

            {author.acf['userfieldgroup.youtube'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.youtube']}
                    target="_blank"
                    rel="noopener noreferrer">
                    <YoutubeIcon/>
                </AuthorSocialMediaLink>
            )}

            {author.acf['userfieldgroup.twitter'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.twitter']}
                    target="_blank"
                    rel="noopener noreferrer">
                    <TwitterIcon/>
                </AuthorSocialMediaLink>
            )}

            {author.acf['userfieldgroup.linkedin'] && (
                <AuthorSocialMediaLink
                    href={author.acf['userfieldgroup.linkedin']}
                    target="_blank"
                    rel="noopener noreferrer">
                    <LinkedinIcon/>
                </AuthorSocialMediaLink>
            )}
        </AuthorContainer>
    )
};

export default connect(Author);

const AuthorContainer = styled('div')` ${tw`md:flex bg-white rounded-lg p-6`}`;
const AuthorImage = styled('img')` ${tw`h-48 w-48 rounded-full mx-auto md:mx-0 md:mr-8`}`;
const AboutContainer = styled('div')` ${tw`text-center md:text-left`}`;
const AuthorName = styled('h2')` ${tw`m-0 text-6xl`}`;
const AuthorTitle = styled('div')` ${tw`text-3xl text-purple-500`}`;
const AuthorDescription = styled('div')` ${tw`font-body font-normal leading-tight tracking-normal text-3xl max-w-4xl mb-4`}`;
const AuthorSocialMediaLink = styled('a')` ${tw`px-1`}`;
const Location = styled('div')` ${tw``}`;
const LocationTitle = styled('div')` ${tw`font-body font-normal leading-tight tracking-normal text-3xl inline-block`}`;
const Marker = styled('img')` ${tw`w-8 inline-block`}`;