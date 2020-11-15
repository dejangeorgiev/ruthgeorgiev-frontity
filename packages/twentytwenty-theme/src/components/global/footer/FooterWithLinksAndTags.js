import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';
import FooterLink from "./FooterLink";
import FacebookIcon from "../icons/social-media/FacebookIcon";
import InstagramIcon from "../icons/social-media/InstagramIcon";
import YoutubeIcon from "../icons/social-media/YoutubeIcon";
import PinterestIcon from "../icons/social-media/PinterestIcon";
import TwitterIcon from "../icons/social-media/TwitterIcon"
import LinkedinIcon from "../icons/social-media/LinkedinIcon"


const FooterWithLinksAndTags = ({actions}) => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterSingleSection>
                    <SectionTitle>Popular Dishes & Diets</SectionTitle>
                    <FooterLink url="/diets/vegan/" title="Vegan"/>
                    <FooterLink url="/diets/vegetarian/" title="Vegetarian"/>
                    <FooterLink url="/dishes/bread/" title="Bread"/>
                    <FooterLink url="/dishes/salad/" title="Salad"/>
                    <FooterLink url="/dishes/coffee/" title="Coffee"/>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Popular Cuisine & Meals</SectionTitle>
                    <FooterLink url="/cuisine/asian/" title="Asian"/>
                    <FooterLink url="/cuisine/european/" title="European"/>
                    <FooterLink url="/cuisine/eastern/" title="Eastern" tag="New"/>
                    <FooterLink url="/meals/fingerfood/" title="Finger-Food"/>
                    <FooterLink url="/meals/appetizer/" title="Appetizer"/>
                    <FooterLink url="/meals/main-course/" title="Main Course"/>
                    <FooterLink url="/meals/dessert/" title="Dessert"/>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Discover</SectionTitle>
                    <FooterLink url="/about" title="About Us"/>
                    <FooterLink url="/recipes" title="Recipes"/>
                    <FooterLink url="/partners" title="Partners" tag="Join us"/>
                    <FooterLink url="/category/healthy" title="Healthy Foods"/>
                    <FooterLink url="/brands" title="Ads of Brands" tag="New"/>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Support</SectionTitle>
                    <FooterLink url="/privacy-policy" title="Privacy Policy"/>
                    <FooterLink url="/contact" title="Contact"/>
                </FooterSingleSection>
                <FooterSingleSection>
                    <SectionTitle>Let's be friends</SectionTitle>
                    <FooterSocialMediaLink
                        href="https://www.facebook.com/ruthgeorgiev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        social="facebook">
                        <FacebookIcon/>
                    </FooterSocialMediaLink>
                    <FooterSocialMediaLink
                        href="https://www.instagram.com/ruthgeorgiev/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <InstagramIcon/>
                    </FooterSocialMediaLink>
                    <FooterSocialMediaLink
                        href="https://www.pinterest.ch/ruthgeorgiev/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <PinterestIcon/>
                    </FooterSocialMediaLink>
                    <FooterSocialMediaLink
                        href="https://www.youtube.com/ruthgeorgiev?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer">
                        <YoutubeIcon/>
                    </FooterSocialMediaLink>
                    <FooterSocialMediaLink
                        href="https://twitter.com/GeorgievRuth"
                        target="_blank"
                        rel="noopener noreferrer">
                        <TwitterIcon/>
                    </FooterSocialMediaLink>
                    <FooterSocialMediaLink
                        href="https://www.linkedin.com/in/ruth-georgiev-984959a3/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedinIcon/>
                    </FooterSocialMediaLink>
                </FooterSingleSection>
            </FooterInner>
        </FooterContainer>
    );
};

export default connect(FooterWithLinksAndTags);

const FooterContainer = styled('div')` ${tw`bg-gray-100`}`;
const FooterInner = styled('div')` ${tw`m-auto text-gray-800 flex flex-wrap justify-start lg:justify-center`}`;
const FooterSingleSection = styled('div')` ${tw`px-10 py-5 sm:px-20 sm:py-20`}`;
const SectionTitle = styled('div')` ${tw`uppercase text-gray-700 font-medium`}`;
const FooterSocialMediaLink = styled('a')` ${tw`px-1`}`;