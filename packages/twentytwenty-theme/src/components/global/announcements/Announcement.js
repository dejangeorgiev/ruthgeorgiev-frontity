import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro'

const Announcement = () => {


    let Announcement = styled('div')` ${tw`max-w-screen-xl mx-auto px-2 sm:px-4`}`;
    let Contents = styled('div')`${tw`p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3`}`;
    let Inner = styled('div')`${tw`flex items-center justify-between flex-wrap`}`;
    let ItemsCenter = styled('div')`${tw`flex items-center justify-between flex-wrap`}`;
    let Image = styled('img')`${tw`h-6`}`;


    let Text = styled('p')`${tw`ml-3 font-medium text-white truncate`}`;

    let TextSpanLead = styled('span')`${tw`lg:hidden`}`;
    let TextSpanLeadSrOnly = styled('span')`${tw``}`;
    let TextSpanLeadLargeInline = styled('span')`${tw`hidden lg:inline text-gray-400`}`;
    let TextSpanLeadStrong = styled('strong')`${tw`text-white font-semibold mr-1`}`;
    let SpanXLHidden = styled('span')`${tw`xl:hidden`}`;
    let SpanXLInline = styled('span')`${tw`hidden xl:inline`}`;


    return (
        <Announcement>
            <Contents role={'alert'}>
                <Inner>
                    <ItemsCenter>
                        <Text>
                            <TextSpanLead>
                                <TextSpanLeadSrOnly>New 100 Recipes Book</TextSpanLeadSrOnly>
                                is now in early access!
                                <TextSpanLeadLargeInline>
                                    <TextSpanLeadStrong>
                                        Now in early access!
                                    </TextSpanLeadStrong>
                                    <SpanXLHidden>
                                        Beautiful UI components by the creators of Tailwind CSS.
                                    </SpanXLHidden>
                                    <SpanXLInline>
                                        Beautiful UI components, crafted by the creators of Tailwind CSS.
                                    </SpanXLInline>
                                </TextSpanLeadLargeInline>
                            </TextSpanLead>
                        </Text>
                    </ItemsCenter>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <div className="rounded-md shadow-sm">
                            <a href="/"
                               className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button onClick={localStorage.setItem('hideBanner', true)} type="button"
                         class="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                        <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                </Inner>
            </Contents>
        </Announcement>

    );
};

export default connect(Announcement);



