import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const ArrowRight = ({}) => {

    return (
        <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white"
                 stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-arrow-left-circle">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 8 8 12 12 16"/>
                <line x1="16" y1="12" x2="8" y2="12"/>
            </svg>
        </Icon>
    );
};

export default connect(ArrowRight);

const Icon = styled('div')` ${tw``}`;

