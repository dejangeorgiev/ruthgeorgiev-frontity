import React from "react";
import {connect, styled} from "frontity";
import Mailchimp from "./Mailchimp";
import tw from 'tailwind.macro';


const NewsletterSubscription = ({actions}) => {

    return (
        <SubscriptionSection>
            <SubscriptionContainer>
                <SubscriptionTitle>
                    Hungry for more? 😋
                </SubscriptionTitle>
                <SubscriptionText>
                    Join our community and never miss out on new recipes, videos, tips and more.
                </SubscriptionText>
                <SubscriptionFormDiv1>
                    <SubscriptionFormDiv2>
                        <Mailchimp />
                    </SubscriptionFormDiv2>
                </SubscriptionFormDiv1>
                <p>
                    I automatically agree to the ruthgeorgiev.com
                    <PrivacyPolicyLink href="/privacy-policy" target="_blank"> Privacy Policy </PrivacyPolicyLink>
                     by sending this form.
                </p>
            </SubscriptionContainer>
        </SubscriptionSection>
    );
};

export default connect(NewsletterSubscription);


const SubscriptionSection = styled('div')`  ${tw`flex justify-center px-4 text-gray-100 bg-gray-800`}`;
const SubscriptionContainer = styled('div')`  ${tw`py-20`}`;
const SubscriptionTitle = styled('h2')`  ${tw`text-center font-bold p-2 m-0 uppercase`}`;
const SubscriptionText = styled('h4')`  ${tw`text-center font-normal p-2 m-0`}`;
const SubscriptionFormDiv1 = styled('div')`  ${tw`flex justify-center m-6`}`;
const SubscriptionFormDiv2 = styled('div')`  ${tw`bg-white rounded-lg`}`;
const PrivacyPolicyLink = styled('a')`  ${tw`text-white`}`;
