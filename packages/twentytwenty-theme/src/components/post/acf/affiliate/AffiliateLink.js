import React from "react";
import {connect, styled} from "frontity";
import Link from "../../../link"
import tw from 'tailwind.macro';


const AffiliateLink = ({state, id}) => {

    const affiliateLink = state.source.post[id];


    return (
        <AffiliateBadgeLink href="/">
            <Badge>

                <Contents role={'alert'}>
                    <BadgeAlert>Buy</BadgeAlert>
                    <BadgeText>Get the coolest t-shirts from our brand new store</BadgeText>
                    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                    </Icon>
                </Contents>
            </Badge>
        </AffiliateBadgeLink>
    );
};

export default connect(AffiliateLink);


const AffiliateBadgeLink = styled('a')`

`;

const Badge = styled('div')` ${tw`bg-indigo-900 text-center py-4 lg:px-4 shadow-md bg-gradient-blue-to-purple`}`;
const Contents = styled('div')`${tw`p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}`;
const BadgeAlert = styled('span')`${tw`flex rounded-full bg-indigo-500 uppercase px-2 py-1 font-bold mr-3`}`;
const BadgeText = styled('span')`${tw`font-semibold mr-2 text-left flex-auto`}`;
const Icon = styled('svg')`${tw`fill-current opacity-75 h-4 w-4`}`;
