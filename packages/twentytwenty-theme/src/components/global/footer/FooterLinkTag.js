import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';

const FooterLinkTag = ({name}) => {
    return (
        <Tag>
            {name}
        </Tag>
    );
};

export default connect(FooterLinkTag);

const Tag = styled('span')` ${tw`text-teal-900 bg-gray-200 rounded-full p-2 mx-2`}`;