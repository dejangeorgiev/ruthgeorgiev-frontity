import React from 'react';
import {Head, connect, styled, decode} from "frontity";

const GoogleStructuredDataForRecipe = ({state, libraries, id}) => {

    const post = state.source.post[id];

    const Html2React = libraries.html2react.Component;

    const dateAndTime = new Date(post.date);
    const year = dateAndTime.getFullYear();
    const month = dateAndTime.getMonth();
    const date = dateAndTime.getDate();

    const title = post.title.rendered;
    const image = state.source.attachment[post.featured_media].source_url;
    const authorName = state.source.author[post.author].name;
    const description = post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
    const prepTime = post.acf['postfieldgroup.preparation_time'];
    const cookTime = post.acf['postfieldgroup.cooking_time'];
    const totalTime = Number(post.acf['postfieldgroup.preparation_time']) + Number(post.acf['postfieldgroup.cooking_time']);
    const datePublished = year + "-" + month + "-" + date;
    const keywords = post.acf['postfieldgroup.keywords'];
    const servings = post.acf['postfieldgroup.servings'];
    const recipeCategory = state.source.category[post.categories[0]].name;
    const recipeCuisine = decode(state.source.cuisine[post.cuisine[0]].name);
    const calories = post.acf['postfieldgroup.calories'];
    const ratingValue = post.acf['postfieldgroup.rating_value'];
    const ratingCount = post.acf['postfieldgroup.rating_count'];
    //const embedYouTubeUrl = "https://youtu.be/" + post.acf['postfieldgroup.video'];


    const recipeIngredients = post.acf['postfieldgroup.ingredients'];

    const ingredients = [];
    {
        recipeIngredients.map((ingredient) => {
            const singleIngredient = "\"" + ingredient['postfieldgroup.ingredients.amount'] + " " +
                ingredient['postfieldgroup.ingredients.measure'] + " " +
                ingredient['postfieldgroup.ingredients.name'] + "\"";

            ingredients.push(
                singleIngredient
            );

            ingredients.join(",")
            return ingredients;
        })
    }

    const recipeInstructions = post.acf['postfieldgroup.instructions'];
    const instructions = [];
    {
        recipeInstructions.map((instruction) => {
            const recipeInstructionImage = instruction['postfieldgroup.instructions.image']['sizes']['large'];
            const recipeInstructionName = instruction['postfieldgroup.instructions.name'];
            const recipeInstructionText = instruction['postfieldgroup.instructions.text'].replace(/(<([^>]+)>)/gi, "");

            /**
             * @todo: add ID's for the instruction steps, e.g. "https://ruthgeorgiev.com/apple-pie/#step1"
             */
            instructions.push(
                {
                    "@type": "HowToStep",
                    "name": recipeInstructionName,
                    "text": recipeInstructionText,
                    "url": "https://ruthgeorgiev.com/" + post.slug,
                    "image": recipeInstructionImage
                }
            );
            instructions.join(",")
        });
    }

    /**
     * @todo: Find a solution to add video object into the JSON
     * @example: https://developers.google.com/search/docs/data-types/recipe
     */

    return (
        <Head>
            <title>{title} - The Best Cooking Recipes & healthy tips</title>
            <script type="application/ld+json">
                {
                    `
            {
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": "${title}",
            "image": [
               "${image}"
            ],
            "author": {
                "@type": "Person",
                "name": "${authorName}"
            },
            "datePublished": "${datePublished}",
            "description": "${description}",
            "prepTime": "PT${prepTime}M",
            "cookTime": "PT${cookTime}M",
            "totalTime": "PT${totalTime}M",
            "keywords": "${keywords}",
            "recipeYield": "${servings}",
            "recipeCategory": "${recipeCategory}",
            "recipeCuisine": "${recipeCuisine}",
            "nutrition": {
                "@type": "NutritionInformation",
                "calories": "${calories}"
            },
            "recipeIngredient": [${ingredients}],
            "recipeInstructions": ${JSON.stringify(instructions)},
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "${ratingValue}",
                "ratingCount": "${ratingCount}"
            }
        }
           `
                }
            </script>
        </Head>
    )
};

export default connect(GoogleStructuredDataForRecipe);
