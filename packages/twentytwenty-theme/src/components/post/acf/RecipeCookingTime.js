import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import StopWatch from "../../global/icons/png/AlarmClock.png"

const RecipeCookingTime = ({state, id}) => {

    const post = state.source.post[id];

    const time = post.acf['postfieldgroup.cooking_time'];
    const timeUnit = post.acf['postfieldgroup.cooking_time_unit'];

    return (
        <CookingTime>
            <CookingTimeIcon src={StopWatch} alt="Preparation Time"/>
            <CookingTimeValue>
                {time}<span> {timeUnit}</span>
            </CookingTimeValue>
            <CookingTimeTitle>Cooking Time</CookingTimeTitle>
        </CookingTime>
    );
};

export default connect(RecipeCookingTime);


const CookingTime = styled('div')` ${tw`px-5 inline-block`}`;
const CookingTimeTitle = styled('p')` ${tw`p-0 m-0 text-center`}`;
const CookingTimeValue = styled('p')` ${tw`p-0 m-0 text-center`}`;
const CookingTimeIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;