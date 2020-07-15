import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const RecipeTip = ({key, title, description}) => {

    return (
        <Tips>
            <TipContents>
                <TipName>{title}</TipName>
                <TipDescription>{description}</TipDescription>
            </TipContents>
        </Tips>
    );
};

export default connect(RecipeTip);

const Tips = styled('div')` ${tw`md:flex bg-white rounded-lg p-6 shadow-md my-6 relative`}`;
const TipContents = styled('div')` ${tw`text-left px-10`}`;
const TipName = styled('h5')` ${tw`p-0 m-0 font-normal underline`}`;
const TipDescription = styled('span')` ${tw`text-gray-800`}`;