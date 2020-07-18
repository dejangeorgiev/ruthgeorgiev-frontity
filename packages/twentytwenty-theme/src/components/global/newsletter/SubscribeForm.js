import React from "react";
import {connect, styled} from "frontity";


import tw from 'tailwind.macro';


const SubscribeForm = ({status, message, onValidated}) => {

    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });


    return (
        <SubscriptionFormSection>
            {status === "sending" && <StatusProcessing style={{color: "blue"}}>sending...</StatusProcessing>}
            {status === "error" && (
                <StatusError
                    dangerouslySetInnerHTML={{__html: message}}
                />
            )}
            {status === "success" && (
                <StatusSuccess
                    dangerouslySetInnerHTML={{__html: message}}
                />
            )}
            <SubscriptionFormInput
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
                value={status === "success" ? "" : null}
            />
            <SiteFooterSubscribeFormButton onClick={submit}>
                Subscribe
            </SiteFooterSubscribeFormButton>
        </SubscriptionFormSection>
    );
};

export default connect(SubscribeForm);

const SubscriptionFormSection = styled('div')`  ${tw`flex flex-wrap justify-between`}`;
const SubscriptionFormInput = styled('input')`  ${tw`m-1 p-4 appearance-none rounded-full border-none text-gray-700 outline-none`}`;
const SiteFooterSubscribeFormButton = styled('button')`  ${tw`w-full m-2 p-4 bg-gray-800 text-gray-100 rounded-lg font-normal uppercase lg:w-auto`}`;
const StatusProcessing = styled('span')`  ${tw`text-blue-100`}`;
const StatusError = styled('div')`  ${tw`text-red-100`}`;
const StatusSuccess = styled('div')`  ${tw`text-green-100`}`;

