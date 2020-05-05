import React from "react";
import {connect, styled} from "frontity";
import Link from "../../../link"
import tw from 'tailwind.macro';


const AffiliateLink = ({state, id}) => {

    const affiliateLink = state.source.post[id];


    return (
        <AffiliateBadgeLink href="/" target="_blank">
            <AffiliateCard>
                <AffiliateCardImageContainer>
                    <AffiliateCardImage
                        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                        alt="Woman paying for a purchase"/>
                </AffiliateCardImageContainer>

                <Contents>
                    <BadgeIcon xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20">
                        <path
                            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/>
                    </BadgeIcon>
                    <ContentBadge>Sponsored</ContentBadge>
                    <BadgeTitle href="/">Finding the best camera</BadgeTitle>
                    <BadgeDescription>
                        Getting a new business off the ground is a lot of hard work. Here are five ideas you
                        can use to find your first customers.
                    </BadgeDescription>
                </Contents>
            </AffiliateCard>
        </AffiliateBadgeLink>
    );
};

export default connect(AffiliateLink);


const AffiliateBadgeLink = styled('a')`
text-decoration:none
`;

const AffiliateCard = styled('div')` ${tw`md:flex shadow-md my-20 hover:shadow-lg`}`;
const AffiliateCardImageContainer = styled('div')` ${tw`md:flex-shrink-0`}`;
const AffiliateCardImage = styled('img')` ${tw`rounded-lg rounded-r-none max-w-xl`}`;

const Contents = styled('div')`${tw`text-left mt-4 md:mt-0 md:ml-6`}`;
const ContentBadge = styled('div')`${tw`uppercase tracking-wide text-gray-500 font-bold inline-block pt-5`}`;
const BadgeTitle = styled('h5')`${tw`block mt-1 leading-tight font-semibold pt-3 mb-0 text-gray-900 hover:underline`}`;
const BadgeDescription = styled('p')`${tw`mt-2 text-gray-600 pr-6 py-3`}`;
const BadgeIcon = styled('svg')`${tw`fill-current text-gray-500 w-5 h-5 mr-2 inline-block`}`;
