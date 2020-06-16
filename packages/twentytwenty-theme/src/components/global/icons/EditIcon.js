import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const EditIcon = ({}) => {
    return (
        <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeLinecap="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-edit-2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
            </svg>
        </Icon>
    );
};

export default connect(EditIcon);

const Icon = styled('div')` ${tw`inline-block text-gray-800 pl-2`}`;
