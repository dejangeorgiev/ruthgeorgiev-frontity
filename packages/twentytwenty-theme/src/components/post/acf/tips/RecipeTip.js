import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const RecipeTip = ({key, title, description}) => {

    return (
        <Tips>
            <EquipmentContents>
                <EquipmentNameTitle>{title}</EquipmentNameTitle>
                <EquipmentDescription>{description}</EquipmentDescription>
            </EquipmentContents>
        </Tips>
    );
};

export default connect(RecipeTip);

const Tips = styled('div')` ${tw`md:flex bg-white rounded-lg p-6 shadow-md my-6 relative`}`;
const EquipmentContents = styled('div')` ${tw`text-center md:text-left px-10`}`;
const EquipmentNameTitle = styled('h4')` ${tw`p-0 m-0 font-normal`}`;
const EquipmentDescription = styled('span')` ${tw`text-gray-600`}`;