import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const IngredientItem = ({key, amount, measure, name}) => {

    return (
        <Ingredient>
            <IngredientContents>
                <IngredientName>{name}</IngredientName>
                <IngredientAmount>{amount}</IngredientAmount>
                <IngredientMeasure>{measure}</IngredientMeasure>
            </IngredientContents>
        </Ingredient>
    );
};

export default connect(IngredientItem);

const Ingredient = styled('div')` ${tw`md:inline-flex lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-2 shadow-md my-2`}`;
const IngredientImage = styled('img')` ${tw`h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6`}`;
const IngredientContents = styled('div')` ${tw`text-left px-10`}`;
const IngredientName = styled('p')` ${tw`p-0 m-0 font-normal`}`;
const IngredientAmount = styled('span')` ${tw`text-gray-800`}`;
const IngredientMeasure = styled('span')` ${tw`text-gray-800 p-4`}`;