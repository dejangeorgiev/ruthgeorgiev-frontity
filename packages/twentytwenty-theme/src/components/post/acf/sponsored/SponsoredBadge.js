import {styled, connect, decode} from "frontity";
import React, {useEffect} from "react";
import ExternalLinkIcon from "../../../global/icons/ExternalLinkIcon";
import tw from "tailwind.macro";


const SponsoredBadge = ({state, actions, id}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const SponsoredBadges = state.source.post[id].acf['postfieldgroup.sponsored_badge'];

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
            {Object.keys(SponsoredBadges).map((key) => {
                const Card = SponsoredBadges[key];

                let Badge = styled('a')` ${tw`
                    rounded-full 
                    shadow-xl 
                    m-10 
                    sm:m-20
                    hover:shadow-sm 
                    fixed 
                    right-0  
                    bottom-0 
                    py-5 
                    px-10 
                    bg-white 
                    z-10
                    text-left
                    max-w-sm
                    w-screen
                `}`;

                if (Card['postfieldgroup.sponsored_badge.is_dark'][0] === "yes") {
                    Badge = styled('a')` ${tw`
                    rounded-full 
                    shadow-xl 
                    m-10 
                    sm:m-20
                    hover:shadow-sm 
                    fixed 
                    right-0 
                    text-gray-100 
                    bottom-0 
                    py-5 
                    px-10 
                    bg-gray-700 
                    z-10
                    text-left
                    max-w-sm
                    w-screen
                    `}`;

                }
                return (
                    <div>
                        {Card['postfieldgroup.sponsored_badge.link'] &&
                        <Badge key={key}
                               href={Card['postfieldgroup.sponsored_badge.link']['url']}
                               target={Card['postfieldgroup.sponsored_badge.link']['target']}>


                            {
                                Card['postfieldgroup.sponsored_badge.image'] &&
                                <SponsoredBadgeImageContainer>
                                <SponsoredBadgeImage
                                    src={Card['postfieldgroup.sponsored_badge.image']['sizes']['medium']}/>
                                </SponsoredBadgeImageContainer>

                            }

                            {
                                Card['postfieldgroup.sponsored_badge.highlighted_text'] &&
                                <HighlightedText>{Card['postfieldgroup.sponsored_badge.highlighted_text']}</HighlightedText>
                            }



                            <Title>{Card['postfieldgroup.sponsored_badge.link']['title']}</Title>
                        </Badge>
                        }
                    </div>
                )
            })}
        </div>
    ) : null;
};

export default connect(SponsoredBadge);

const SponsoredBadgeLink = styled('a')`
text-decoration:none
`;

const SponsoredBadgeImage = styled('img')` max-width: 3rem; max-height: 3rem; margin-right:3px; ${tw``}`;
const SponsoredBadgeImageContainer = styled('div')`  ${tw`inline-flex rounded-lg rounded-r-none align-middle pr-2`}`;
const HighlightedText = styled('div')` ${tw`inline-flex m-auto align-middle font-bold`}`;
const Title = styled('div')` ${tw`pt-3`}`;