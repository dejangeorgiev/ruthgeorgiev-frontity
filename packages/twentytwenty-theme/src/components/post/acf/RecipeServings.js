import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import LunchIcon from "../../global/icons/png/Plate.png"

const RecipeServings = ({state, id}) => {

    const post = state.source.post[id];

    const value = post.acf['postfieldgroup.servings'];
    const servingType = post.acf['postfieldgroup.serving_type'];

    return (
        <Serving>
            <ServingIcon src={LunchIcon} alt="Serving Persons"/>
            <ServingValue>{value}</ServingValue>
            <ServingValueTitle>{servingType}</ServingValueTitle>
        </Serving>
    );
};

export default connect(RecipeServings);

const Serving = styled('div')` ${tw`px-5 inline-block`}`;
const ServingValueTitle = styled('p')` ${tw`p-0 m-0 text-center`}`;
const ServingValue = styled('p')` ${tw`p-0 m-0 text-center`}`;
const ServingIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;