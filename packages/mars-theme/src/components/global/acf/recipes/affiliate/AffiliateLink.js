import React from "react";
import {connect, styled} from "frontity";
import Link from "../../../../link";

const AffiliateLink = ({state, id}) => {

    const affiliateLink = state.source.post[id];

    return (
        <Link link={affiliateLink.acf['postfieldgroup.url']}
              target='_blank'>

                Highlighted: {affiliateLink.acf['postfieldgroup.text_highlighted']}
                Text: {affiliateLink.acf['postfieldgroup.text']}

            <p>Code: {affiliateLink.acf['postfieldgroup.code']}</p>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                            et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                    </div>
            </div>
        </Link>

    );
};

export default connect(AffiliateLink);

