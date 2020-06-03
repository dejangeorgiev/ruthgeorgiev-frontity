import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const YouTubeIcon = ({}) => {

    return (
        <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-delete">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                <line x1="18" y1="9" x2="12" y2="15"/>
                <line x1="12" y1="9" x2="18" y2="15"/>
            </svg>
        </Icon>
    );
};

export default connect(YouTubeIcon);

const Icon = styled('div')` ${tw`inline-block text-gray-800 pl-2`}`;
