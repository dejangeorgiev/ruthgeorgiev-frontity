import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import ExternalLinkIcon from "../../../global/icons/ExternalLinkIcon";
import tw from "tailwind.macro";

const BadgeCard = ({card, state, actions}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    const BadgeCardHighlightedText = card['postfieldgroup.badge.highlighted_text'];
    const BadgeCardLink = card['postfieldgroup.badge.link'];
    const BadgeCardLinkTitle = BadgeCardLink['title'];
    const BadgeCardLinkURL = BadgeCardLink['url'];
    const BadgeCardLinkTarget = BadgeCardLink['target'];

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
        <>
            <CardBadgeLink
                href={BadgeCardLinkURL}
                target={BadgeCardLinkTarget}
                rel="noopener noreferrer"
            >
                <Card>
                    <CardWrapper role="alert">
                        <HighlightedText>{BadgeCardHighlightedText}</HighlightedText>
                        <LinkText>{BadgeCardLinkTitle}</LinkText>
                        <ExternalLinkIcon/>
                    </CardWrapper>
                </Card>
            </CardBadgeLink>
        </>
    ) : null;
};

export default connect(BadgeCard);

const CardBadgeLink = styled('a')`
text-decoration:none
`;
const Card = styled('div')` ${tw`bg-indigo-900 hover:bg-indigo-800 text-center py-4 my-4 rounded-full px-4`}`;
const CardWrapper = styled('div')` ${tw`p-4 bg-indigo-800 w-full items-center text-indigo-100 leading-none rounded-full flex inline-flex`}`;
const HighlightedText = styled('span')` ${tw`flex rounded-full bg-indigo-700 px-2 py-1 hidden sm:inline-flex font-bold mr-3`}`;
const LinkText = styled('span')` ${tw`font-normal mr-2 text-center flex-auto`}`;