import React, {useEffect} from 'react';
import {connect, styled} from "frontity";

const GoogleAdsHeader = ({}) => {

    return (
        <Head>
            <script async src={`//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}/>
        </Head>
    );
};

export default connect(GoogleAdsHeader);



