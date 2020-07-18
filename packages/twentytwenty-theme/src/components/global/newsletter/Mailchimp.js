import React from "react";
import {connect, styled} from "frontity";
import MailchimpSubscribe from "react-mailchimp-subscribe";


import tw from 'tailwind.macro';


const Mailchimp = ({state, actions}) => {

    const url = state.newsletter.mailchimp.url;


    return (
        <MailchimpSubscribe url={url} />
    );
};

export default connect(Mailchimp);

