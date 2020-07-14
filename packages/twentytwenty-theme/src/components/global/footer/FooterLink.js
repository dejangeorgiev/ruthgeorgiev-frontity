import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro';
import FooterLinkTag from "./FooterLinkTag";

const FooterLink = ({url, title, target, tag}) => {
    return (
        <Link
            href={url}
            rel="noopener noreferrer"
            target={target}>
            {title}
            {tag && <FooterLinkTag name={tag}/>}
        </Link>
    );
};

export default connect(FooterLink);

const Link = styled('a')` ${tw`my-3 block w-max-content hover:underline`}`;
