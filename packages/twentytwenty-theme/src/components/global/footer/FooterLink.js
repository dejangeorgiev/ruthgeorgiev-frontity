import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';
import FooterLinkTag from "./FooterLinkTag";
import Link from "../../link"

const FooterLink = ({url, title, target, tag}) => {
    return (
        <CustomLink
            link={url}
            target={target}>
            {title}
            {tag && <FooterLinkTag name={tag}/>}
        </CustomLink>
    );
};

export default connect(FooterLink);

const CustomLink = styled(Link)` ${tw`my-3 block w-max-content hover:underline`}`;
