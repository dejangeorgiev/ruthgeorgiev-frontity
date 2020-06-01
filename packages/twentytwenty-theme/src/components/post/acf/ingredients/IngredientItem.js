import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";

const IngredientItem = ({key, amount, measure, name, image}) => {

    const imageUrl = image.sizes['very-small'];
    const imageAlt = image.alt;

    return (
        <Ingredient>
            <IngredientImage src={imageUrl} alt={imageAlt}/>
            <IngredientContents>
                <IngredientName>{name}</IngredientName>
                <IngredientAmount>{amount}</IngredientAmount>
                <IngredientMeasure>{measure}</IngredientMeasure>
            </IngredientContents>
        </Ingredient>
    );
};

export default connect(IngredientItem);

const Ingredient = styled('div')` ${tw`md:inline-flex md:w-1/2 bg-white rounded-lg p-6 shadow-md my-6`}`;
const IngredientImage = styled('img')` ${tw`h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6`}`;
const IngredientContents = styled('div')` ${tw`text-center md:text-left px-10`}`;
const IngredientName = styled('h4')` ${tw`p-0 m-0 font-normal`}`;
const IngredientAmount = styled('span')` ${tw`text-gray-600`}`;
const IngredientMeasure = styled('span')` ${tw`text-gray-600 p-4`}`;