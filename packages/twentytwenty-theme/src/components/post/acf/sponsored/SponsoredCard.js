import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import ExternalLinkIcon from "../../../global/icons/ExternalLinkIcon";
import tw from "tailwind.macro";

const SponsoredCard = ({card, state, actions}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    const SponsoredCardName = card['postfieldgroup.sponsored.name'];
    const SponsoredCardCode = card['postfieldgroup.sponsored.code'];
    const SponsoredCardDescription = card['postfieldgroup.sponsored.description'];
    const SponsoredCardHighlightedText = card['postfieldgroup.sponsored.highlighted_text'];
    const SponsoredCardImageUrl = card['postfieldgroup.sponsored.image'].sizes.medium;
    const SponsoredCardImageAlt = card['postfieldgroup.sponsored.image'].alt;
    const SponsoredCardLinkUrl = card['postfieldgroup.sponsored.url'];

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <div>
            <SponsoredCardBadgeLink
                href={SponsoredCardLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Card>
                    <SponsoredCardImageContainer>
                        <SponsoredCardImage
                            src={SponsoredCardImageUrl}
                            data-src={SponsoredCardImageUrl}
                            alt={SponsoredCardImageAlt}
                            className="lazyload"
                        />
                    </SponsoredCardImageContainer>
                    <SponsoredCardContents>
                        <ContentBadge>
                            <ExternalLinkIcon/>
                            {SponsoredCardHighlightedText}
                        </ContentBadge>
                        <BadgeTitle href={SponsoredCardLinkUrl}>{SponsoredCardName}</BadgeTitle>
                        <BadgeDescription>
                            {SponsoredCardDescription}
                        </BadgeDescription>
                    </SponsoredCardContents>
                </Card>
            </SponsoredCardBadgeLink>
        </div>
    ) : null;
};

export default connect(SponsoredCard);

const SponsoredCardBadgeLink = styled('a')`
text-decoration:none
`;

const Card = styled('div')` ${tw`md:flex shadow-md my-20 hover:shadow-sm relative`}`;
const SponsoredCardImageContainer = styled('div')` ${tw`md:flex-shrink-0`}`;
const SponsoredCardImage = styled('img')` ${tw`rounded-lg rounded-r-none md:max-w-xl`}`;
const SponsoredCardContents = styled('div')`${tw`text-left mt-4 md:ml-6 pl-5`}`;
const ContentBadge = styled('div')`${tw`uppercase tracking-wide text-gray-700 font-bold inline-block pt-5`}`;
const BadgeTitle = styled('h5')`${tw`block mt-1 leading-tight font-semibold pt-3 mb-0 text-gray-900 hover:underline`}`;
const BadgeDescription = styled('p')`${tw`mt-2 text-gray-800 pr-6 py-3`}`;

