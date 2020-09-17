import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import tw from "tailwind.macro";
import Link from "../../../link";
import LinkedinIcon from "../../../global/icons/social-media/LinkedinIcon";
import InstagramIcon from "../../../global/icons/social-media/InstagramIcon";
import FacebookIcon from "../../../global/icons/social-media/FacebookIcon"
import YoutubeIcon from "../../../global/icons/social-media/YoutubeIcon";
import PinterestIcon from "../../../global/icons/social-media/PinterestIcon";
import TwitterIcon from "../../../global/icons/social-media/TwitterIcon";


const ProfileCard = ({
                         state,
                         actions,
                         libraries,
                         name,
                         image,
                         profession,
                         location,
                         description,
                         button,
                         facebook,
                         instagram,
                         twitter,
                         youtube,
                         linkedin,
                         pinterest
                     }) => {

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch(state.router.link);
    }, []);

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const page = state.source[data.type][data.id];
    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);
    const Html2React = libraries.html2react.Component;

    const MobileImageStyles = {
        backgroundImage: `url(${image.sizes.thumbnail})`,
    };

    return data.isReady ? (
        <>
            <Profile>
                <MainColumn>
                    <ProfileInner>

                        {image && (<MobileImage style={MobileImageStyles}/>)}


                        {name && (<Name>{name}</Name>)}

                        <Border/>

                        {profession && (<Profession>{profession}</Profession>)}

                        {location && (<Location>{location}</Location>)}

                        {description && (<Description>{description}</Description>)}

                        {button && (
                            <ButtonContainer>
                                <Button link={button.url}
                                        target={button.target}>
                                    {button.title}
                                </Button>
                            </ButtonContainer>
                        )}

                        <SocialMediaLinks>
                            {facebook && (
                                <AuthorSocialMediaLink
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FacebookIcon/>
                                </AuthorSocialMediaLink>
                            )}

                            {instagram && (
                                <AuthorSocialMediaLink
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <InstagramIcon/>
                                </AuthorSocialMediaLink>
                            )}

                            {pinterest && (
                                <AuthorSocialMediaLink
                                    href={pinterest}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <PinterestIcon/>
                                </AuthorSocialMediaLink>
                            )}

                            {youtube && (
                                <AuthorSocialMediaLink
                                    href={youtube}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <YoutubeIcon/>
                                </AuthorSocialMediaLink>
                            )}

                            {twitter && (
                                <AuthorSocialMediaLink
                                    href={twitter}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <TwitterIcon/>
                                </AuthorSocialMediaLink>
                            )}

                            {linkedin && (
                                <AuthorSocialMediaLink
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <LinkedinIcon/>
                                </AuthorSocialMediaLink>
                            )}
                        </SocialMediaLinks>
                    </ProfileInner>
                </MainColumn>
                <ProfileImageColumn>
                    <ProfileImage src={image.sizes.medium}/>
                </ProfileImageColumn>
            </Profile>
        </>
    ) : null;
};

export default connect(ProfileCard);

const Profile = styled('div')` ${tw`flex items-center h-auto flex-wrap mx-auto my-32`}`;
const MainColumn = styled('div')` ${tw`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0`}`;
const ProfileInner = styled('div')` ${tw`p-4 md:p-12 text-center lg:text-left`}`;
const MobileImage = styled('div')` ${tw`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-top`}`;

const Name = styled('h1')` ${tw`text-6xl font-bold pt-8 lg:pt-0`}`;
const Border = styled('div')` ${tw`mx-auto border-b-2 border-teal-500 border-solid opacity-25`}`;
const Profession = styled('p')` ${tw`pt-4 m-0 text-3xl font-bold flex items-center justify-center lg:justify-start`}`;
const Location = styled('p')` ${tw`pt-2 m-0 text-gray-600 text-2xl flex items-center justify-center lg:justify-start`}`;
const Description = styled('p')` ${tw`pt-8 text-2xl`}`;

const ButtonContainer = styled('div')` ${tw`pt-10 pb-10`}`;
const Button = styled(Link)` ${tw`bg-teal-700 hover:bg-teal-900 text-white font-bold py-6 px-6 rounded-full`}`;

const SocialMediaLinks = styled('div')` ${tw`mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between`}`;
const AuthorSocialMediaLink = styled('a')` ${tw`px-1`}`;

const ProfileImageColumn = styled('div')` ${tw`w-full lg:w-2/5`}`;
const ProfileImage = styled('img')` ${tw`rounded-none lg:rounded-lg shadow-2xl hidden lg:block`}`;











