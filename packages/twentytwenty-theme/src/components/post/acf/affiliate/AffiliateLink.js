import React from "react";
import {connect, styled} from "frontity";
import Link from "../../../link";
import tw from 'tailwind.macro'

const AffiliateLink = ({state, id}) => {

    const affiliateLink = state.source.post[id];

    let Button = styled('button')`
                       ${tw`
                            appearance-none bg-indigo text-indigo-lightest
    border-0 p-3 rounded-default font-mono cursor-pointer
    text-xs
  `};
`

    return (
        <Link link={affiliateLink.acf['postfieldgroup.url']}
              target='_blank'>

            Highlighted: {affiliateLink.acf['postfieldgroup.text_highlighted']}
            Text: {affiliateLink.acf['postfieldgroup.text']}

            <p>Code: {affiliateLink.acf['postfieldgroup.code']}</p>

<Button>hello</Button>
        </Link>


    );
};

export default connect(AffiliateLink);

