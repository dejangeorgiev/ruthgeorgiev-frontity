import React from "react";
import {connect, styled} from "frontity";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "./SubscribeForm";
import tw from 'tailwind.macro';


const Mailchimp = ({state}) => {

    const url = state.newsletter.mailchimp.url;

    return (
        <>
            <MailchimpSubscribe
                url={url}
                render={({subscribe, status, message}) => (
                    <SubscribeForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    );
};

export default connect(Mailchimp);

