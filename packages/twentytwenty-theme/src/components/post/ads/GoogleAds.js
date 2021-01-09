import React, {useEffect} from 'react';
import {connect, styled} from "frontity";

const GoogleAds = ({}) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    })

    return (
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-client="ca-pub-2902968812206324"
             data-ad-slot="6456094576"
             data-ad-format="auto"
             data-full-width-responsive="true"/>
    );
};

export default connect(GoogleAds);

