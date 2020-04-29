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



    return (
        <Announcement>
            <Contents role={'alert'}>
                <Inner>
                    <ItemsCenter>
                        <Image src="https://tailwindcss.com/img/tailwind-ui-logo-on-dark.svg" alt=""/>
                        <Text>

                            <TextSpanLead>
                                <TextSpanLeadSrOnly>New 100 Recipes Book</TextSpanLeadSrOnly>
                                is now in early access!
                            </TextSpanLead>


                        </Text>
                    </ItemsCenter>
                </Inner>
            </Contents>
        </Announcement>

    );
};

export default connect(Announcement);



