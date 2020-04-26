import React from 'react';
import {connect, styled} from "frontity";


const EquipmentItem = ({key, name, description, image, link}) => {


    const imageUrl = image.sizes['very-small'];
    const imageAlt = image.alt;

    const linkUrl = link.url;
    const linkTitle = link.title;
    const linkTarget = link.target;

    return (
        <div>
            <p>{key}</p>
            <p>{name}</p>
            <p>{description}</p>
            <img
                src={imageUrl}
                alt={imageAlt}
            />

            <a href={linkUrl} target={linkTarget}>{linkTitle}</a>
        </div>
    );
};

export default connect(EquipmentItem);
