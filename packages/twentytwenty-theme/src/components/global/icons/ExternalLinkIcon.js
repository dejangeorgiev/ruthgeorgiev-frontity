import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const ExternalLinkIcon = ({}) => {

    return (
        <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        </Icon>
    );
};

export default connect(ExternalLinkIcon);

const Icon = styled('div')` ${tw`inline-block align-bottom pr-2`}`;
