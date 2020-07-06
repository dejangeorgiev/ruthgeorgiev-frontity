import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';
import FacebookIcon from "../icons/social-media/FacebookIcon";
import InstagramIcon from "../icons/social-media/InstagramIcon";
import YoutubeIcon from "../icons/social-media/YoutubeIcon";
import PinterestIcon from "../icons/social-media/PinterestIcon";

const FooterWithLinksAndTags = ({actions}) => {


    return (
        <FooterContainer>
            <FooterInner>

                <FooterSingleSection>
                    <SectionTitle>Popular Dishes & Diets</SectionTitle>
                    <FooterLink href="/diets/vegan/">Vegan </FooterLink>
                    <FooterLink href="/diets/vegetarian/">Vegetarian </FooterLink>
                    <FooterLink href="/dishes/curry/">Curry </FooterLink>
                    <FooterLink href="/dishes/salad/">Salad </FooterLink>
                    <FooterLink href="/dishes/coffee/">Coffee </FooterLink>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Popular Cuisine & Meals</SectionTitle>
                    <FooterLink href="/cuisine/asian/">Asian </FooterLink>
                    <FooterLink href="/cuisine/european/">European </FooterLink>
                    <FooterLink href="/cuisine/eastern/">Eastern <FooterLinkTag>New</FooterLinkTag></FooterLink>
                    <FooterLink href="/meals/fingerfood/">Finger-Food </FooterLink>
                    <FooterLink href="/meals/appetizer/">Appetizer </FooterLink>
                    <FooterLink href="/meals/main-course/">Main Course </FooterLink>
                    <FooterLink href="/meals/dessert/">Dessert </FooterLink>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Discover</SectionTitle>
                    <FooterLink href="/about">About Us </FooterLink>
                    <FooterLink href="/recipes">Recipes </FooterLink>
                    <FooterLink href="/partners">Partners <FooterLinkTag>Join us</FooterLinkTag></FooterLink>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Support</SectionTitle>
                    <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact</FooterLink>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Let's be friends</SectionTitle>
                    <FooterSocialMediaLink href="https://www.facebook.com/ruthgeorgiev/" target="_blank"><FacebookIcon/></FooterSocialMediaLink>
                    <FooterSocialMediaLink href="https://www.instagram.com/ruthgeorgiev/" target="_blank"><InstagramIcon/></FooterSocialMediaLink>
                    <FooterSocialMediaLink href="https://www.pinterest.ch/ruthgeorgiev/" target="_blank"><PinterestIcon/></FooterSocialMediaLink>
                    <FooterSocialMediaLink href="https://www.youtube.com/ruthgeorgiev/" target='_blank'><YoutubeIcon/></FooterSocialMediaLink>
                </FooterSingleSection>
            </FooterInner>
        </FooterContainer>
    );
};

export default connect(FooterWithLinksAndTags);

const FooterContainer = styled('div')`  ${tw`bg-gray-100`}`;
const FooterInner = styled('div')`  ${tw`m-auto text-gray-800 flex flex-wrap justify-start lg:justify-center`}`;
const FooterSingleSection = styled('div')`  ${tw`px-10 py-5 sm:px-20 sm:py-20`}`;
const SectionTitle = styled('div')`  ${tw`uppercase text-gray-500 font-medium`}`;
const FooterLink = styled('a')`  ${tw`my-3 block hover:underline`}`;
const FooterLinkTag = styled('span')`  ${tw`text-teal-600 p-1`}`;
const FooterSocialMediaLink = styled('a')`  ${tw`px-1`}`;