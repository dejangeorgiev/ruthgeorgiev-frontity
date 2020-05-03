import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const EquipmentItem = ({key, name, description, image, link}) => {

    const imageUrl = image.sizes['very-small'];
    const imageAlt = image.alt;

    const linkUrl = link.url;
    const linkTitle = link.title;
    const linkTarget = link.target;

    return (
        <Equipment>
            <EquipmentImage
                src={imageUrl}
                alt={imageAlt}
            />
            <EquipmentContents>
                <EquipmentName>{name}</EquipmentName>
                <EquipmentDescription>{description}</EquipmentDescription>
            </EquipmentContents>

            <EquipmentLink href={linkUrl} target={linkTarget}>{linkTitle}</EquipmentLink>
        </Equipment>
    );
};

export default connect(EquipmentItem);

const Equipment = styled('div')` ${tw`md:flex bg-white rounded-lg p-6 shadow-md my-6 relative`}`;
const EquipmentImage = styled('img')` ${tw`h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6`}`;
const EquipmentContents = styled('div')` ${tw`text-center md:text-left px-10`}`;
const EquipmentName = styled('h4')` ${tw`p-0 m-0 font-normal`}`;
const EquipmentDescription = styled('span')` ${tw`text-gray-600`}`;
const EquipmentLink = styled('a')` ${tw`text-gray-600 p-4 md:absolute right-0`}`;