import React from 'react';
import {Head, connect, styled} from "frontity";


const GoogleStructuredDataForRecipe = ({state, libraries, id}) => {

    const post = state.source.post[id];

    const Html2React = libraries.html2react.Component;

    const title = post.title.rendered;
    const image = state.source.attachment[post.featured_media].source_url;
    const authorName = state.source.author[post.author].name;
    const description = post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
    const prepTime = post.acf['postfieldgroup.preparation_time'];
    const prepTimeUnit = post.acf['postfieldgroup.preparation_time_unit'];
    const cookTime = post.acf['postfieldgroup.cooking_time'];
    const cookTimeUnit = post.acf['postfieldgroup.cooking_time_unit'];
    const totalTime = Number(post.acf['postfieldgroup.preparation_time']) + Number(post.acf['postfieldgroup.cooking_time']);
    const datePublished = '';

    console.log(post);

    console.log(totalTime);


    return (
        <Head>
            <title>{title} - The Best Cooking Recipes & healthy tips</title>
            <script type="application/ld+json">
                {
                    `
            {
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": ${title},
            "image": [
               ${image},
            ],
            "author": {
                "@type": "Person",
                "name": ${authorName},
            },
            "datePublished": "2018-03-10",
            "description": ${description},
            "prepTime": "PT"+${prepTime}+"M",
            "cookTime": "PT"+${cookTime}+"M",
            "totalTime": "PT"+${totalTime}+"M",
            "keywords": "cake for a party, coffee",
            "recipeYield": "10",
            "recipeCategory": "Dessert",
            "recipeCuisine": "American",
            "nutrition": {
                "@type": "NutritionInformation",
                "calories": "270 calories"
            },
            "recipeIngredient": [
                "2 cups of flour",
                "3/4 cup white sugar",
                "2 teaspoons baking powder",
                "1/2 teaspoon salt",
                "1/2 cup butter",
                "2 eggs",
                "3/4 cup milk"
            ],
            "recipeInstructions": [
                {
                    "@type": "HowToStep",
                    "name": "Preheat",
                    "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",
                    "url": "https://example.com/party-coffee-cake#step1",
                    "image": "https://example.com/photos/party-coffee-cake/step1.jpg"
                },
                {
                    "@type": "HowToStep",
                    "name": "Mix dry ingredients",
                    "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",
                    "url": "https://example.com/party-coffee-cake#step2",
                    "image": "https://example.com/photos/party-coffee-cake/step2.jpg"
                },
                {
                    "@type": "HowToStep",
                    "name": "Add wet ingredients",
                    "text": "Mix in the butter, eggs, and milk.",
                    "url": "https://example.com/party-coffee-cake#step3",
                    "image": "https://example.com/photos/party-coffee-cake/step3.jpg"
                },
                {
                    "@type": "HowToStep",
                    "name": "Spread into pan",
                    "text": "Spread into the prepared pan.",
                    "url": "https://example.com/party-coffee-cake#step4",
                    "image": "https://example.com/photos/party-coffee-cake/step4.jpg"
                },
                {
                    "@type": "HowToStep",
                    "name": "Bake",
                    "text": "Bake for 30 to 35 minutes, or until firm.",
                    "url": "https://example.com/party-coffee-cake#step5",
                    "image": "https://example.com/photos/party-coffee-cake/step5.jpg"
                },
                {
                    "@type": "HowToStep",
                    "name": "Enjoy",
                    "text": "Allow to cool and enjoy.",
                    "url": "https://example.com/party-coffee-cake#step6",
                    "image": "https://example.com/photos/party-coffee-cake/step6.jpg"
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "ratingCount": "18"
            },
            "video": {
                "@type": "VideoObject",
                "name": "How to make a Party Coffee Cake",
                "description": "This is how you make a Party Coffee Cake.",
                "thumbnailUrl": [
                     ${image},
                ],
                "contentUrl": "http://www.example.com/video123.mp4",
                "embedUrl": "http://www.example.com/videoplayer?video=123",
                "uploadDate": "2018-02-05T08:00:00+08:00",
                "duration": "PT1M33S",
                "interactionStatistic": {
                    "@type": "InteractionCounter",
                    "interactionType": {"@type": "http://schema.org/WatchAction"},
                    "userInteractionCount": 2347
                },
                "expires": "2019-02-05T08:00:00+08:00"
            }
        }
           `
                }
            </script>
        </Head>
    )

};

export default connect(GoogleStructuredDataForRecipe);
