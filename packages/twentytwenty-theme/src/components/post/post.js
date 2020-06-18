import {styled, connect} from "frontity";
import React, {useEffect} from "react";
import FeaturedMedia from "./featured-media";
import {
    EntryContent,
    Post as _Post,
    PostHeader,
    PostInner,
    PostTitle,
    SectionContainer,
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";
import Ingredients from "./acf/ingredients/Ingredients";
import Sponsored from "./acf/sponsored/Sponsored";
import Equipment from "./acf/equipment/Equipment";
import RecipeDescription from "./acf/RecipeDescription";
import RecipeNote from "./acf/RecipeNote";
import RecipeTips from "./acf/tips/RecipeTips";
import Cuisine from "./acf/cuisine/Cuisine";
import Diets from "./acf/diets/Diets";
import Dishes from "./acf/dishes/Dishes";
import Meals from "./acf/meals/Meals";
import YoutubeVideo from "./acf/YoutubeVideo";
import YouTubeIcon from "../global/icons/YouTubeIcon";
import EasyRecipe from "../global/icons/png/EasyRecipe.png"
import ModernCookingTools from "../global/icons/png/ModernCookingTools.png"
import ProfessionalChefFemale from "../global/icons/png/ProfessionalChefFemale.png"
import RecipeTipsIconPng from "../global/icons/png/RecipeTips.png"

import Comments from "../comments";
import RecommendedPosts from "./acf/recommended/posts/RecommendedPosts";


import SocialMediaShareButtons from "../global/social-share/SocialMediaShareButtons";

import tw from 'tailwind.macro'

const Post = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const post = state.source[data.type][data.id];

    const postUrl = 'https://ruthgeorgiev-frontity.now.sh' + state.router.link;

    const media = state.source.attachment[post.featured_media];

    // Get the data of the author.
    // const author = state.source.author[post.author];
    // Get a human readable date.
    // const date = new Date(post.date);
    // Get the html2react component.
    const Html2React = libraries.html2react.Component;

    // Get all categories
    const allCategories = state.source.category;
    /**
     * The item's categories is an array of each category id
     * So, we'll look up the details of each category in allCategories
     */
    const categories = post.categories && post.categories.map((catId) => allCategories[catId]);

    // Get all tags
    const allTags = state.source.tag;
    /**
     * The item's categories is an array of each tag id
     * So, we'll look up the details of each tag in allTags
     */
    const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);

    // Get all cuisine
    const allCuisine = state.source.cuisine;

    /**
     * The item's cuisine is an array of each cuisine id
     * So, we'll look up the details of each cuisine in allCuisine
     */
    const cuisine = post.cuisine && post.cuisine.map((cuisineId) => allCuisine[cuisineId]);

    // Get all diets
    const allDiets = state.source.diets;

    /**
     * The item's diets is an array of each diet id
     * So, we'll look up the details of each diet in allDiets
     */
    const diets = post.diets && post.diets.map((dietId) => allDiets[dietId]);

    // Get all dishes
    const allDishes = state.source.dishes;

    /**
     * The item's dishes is an array of each dish id
     * So, we'll look up the details of each dish in allDishes
     */
    const dishes = post.dishes && post.dishes.map((dishId) => allDishes[dishId]);

    // Get all meals
    const allMeals = state.source.meals;

    /**
     * The item's dishes is an array of each category id
     * So, we'll look up the details of each dish in allDishes
     */
    const meals = post.meals && post.meals.map((mealId) => allMeals[mealId]);

    /**
     * Once the post has loaded in the DOM, prefetch both the
     * home posts and the list component so if the user visits
     * the home page, everything is ready and it loads instantly.
     */
    useEffect(() => {
        actions.source.fetch("/");
    }, []);

    // Load the post, but only if the data is ready.
    return data.isReady ? (
        <PostArticle>
            <Header>
                <SectionContainer>

                    {/* If the post has categories, render the categories */}
                    {post.categories && <PostCategories categories={categories}/>}

                    <PostTitle
                        as="h1"
                        className="heading-size-1"
                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                    />

                    {/* The post's metadata like author, publish date, and comments */}
                    <PostMeta item={post}/>

                    {/* If the post has tags, render it */}
                    {post.tags && <PostTags tags={tags}/>}

                    <SocialMediaShareButtons
                        url={postUrl}
                        media={media.source_url}
                        alt={media.alt_text}
                        title={post.title.rendered}
                        children={post.title.rendered}
                        hashtag='#ruthgeorgiev'
                        hashtags={['ruthgeorgiev', 'dejangeorgiev']}
                    />

                    <PostTaxonomies>
                        <CuisineTaxonomy>
                            {/* If the post has cuisine, render it */}
                            {post.cuisine && <Cuisine cuisine={cuisine}/>}
                        </CuisineTaxonomy>
                        <DietsTaxonomy>
                            {/* If the post has diets, render it */}
                            {post.diets && <Diets diets={diets}/>}
                        </DietsTaxonomy>
                        <DishesTaxonomy>
                            {/* If the post has dishes, render it */}
                            {post.dishes && <Dishes dishes={dishes}/>}
                        </DishesTaxonomy>
                        <MealsTaxonomy>
                            {/* If the post has dishes, render it */}
                            {post.meals && <Meals meals={meals}/>}
                        </MealsTaxonomy>
                    </PostTaxonomies>
                    {state.theme.featuredMedia.showOnPost && (
                        <FeaturedImage id={post.featured_media} isSinglePost={true}/>
                    )}

                    {/* if the post has description, render it */}
                    {post.acf['postfieldgroup.description'] &&
                    <RecipeDescriptionTitle>How to do it? <DescriptionIcon
                        src={ProfessionalChefFemale}/></RecipeDescriptionTitle>}
                    {post.acf['postfieldgroup.description'] && <RecipeDescription id={post.id}/>}

                    {/* If the post has ingredients, render it */}
                    {post.acf['postfieldgroup.ingredients'] &&
                    <IngredientsTitle>Ingredients <IngredientsIcon src={EasyRecipe}/></IngredientsTitle>}
                    {post.acf['postfieldgroup.ingredients'] && <Ingredients id={post.id}/>}

                    {/* If the post has equipment, render it */}
                    {post.acf['postfieldgroup.equipment'] &&
                    <EquipmentTitle>Equipment <EquipmentIcon src={ModernCookingTools}/> </EquipmentTitle>}
                    {post.acf['postfieldgroup.equipment'] && <Equipment id={post.id}/>}

                    {/* if the post has affiliate / sponsored link, render it */}
                    {post.acf['postfieldgroup.sponsored'] && <Sponsored id={post.id}/>}

                    {/* if the post has tips, render it */}
                    {post.acf['postfieldgroup.tips'] &&
                    <RecipeTipsTitle>Tips <RecipeTipsIcon src={RecipeTipsIconPng}/> </RecipeTipsTitle>}
                    {post.acf['postfieldgroup.tips'] && <RecipeTips id={post.id}/>}

                    {/* if the post has description, render it */}
                    {post.acf['postfieldgroup.note'] && <RecipeNote id={post.id}/>}

                    {/* if the post has a YouTube video, render it */}
                    {post.acf['postfieldgroup.video'] &&
                    <RecipeYoutubeVideoTitle>Explained on YouTube <YouTubeIcon/>
                    </RecipeYoutubeVideoTitle>}
                    {post.acf['postfieldgroup.video'] && <YoutubeVideo videoId={post.acf['postfieldgroup.video']}/>}

                    {/* <Comments id={post.id}/> */}

                    <SocialMediaShareButtons
                        url={postUrl}
                        media={media.source_url}
                        alt={media.alt_text}
                        title={post.title.rendered}
                        children={post.title.rendered}
                        hashtag='#ruthgeorgiev'
                        hashtags={['ruthgeorgiev', 'dejangeorgiev']}
                    />

                    {/* if the post has relationship posts video, render it */}
                    {/*post.acf['postfieldgroup.posts'] && <RecommendedPostsTitle>Read Next</RecommendedPostsTitle>*/}
                    {/*post.acf['postfieldgroup.posts'] && <RecommendedPosts id={post.id}/>*/}


                </SectionContainer>
            </Header>

            {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */
            }

            {/* If the post has an excerpt (short summary text), we render it */
            }
            {
                post.content && (
                    <PostInner size="thin">
                        <EntryContent>
                            <Html2React html={post.content.rendered}/>
                        </EntryContent>
                    </PostInner>
                )
            }
        </PostArticle>
    ) : null;
};

export default connect(Post);

const Header = styled(PostHeader)`
background-color: #fff;
margin: 0;
padding: 4rem 0;
@media (min-width: 700px) {
padding: 8rem 0;
}
`;

const PostArticle = styled(_Post)`
padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
margin-top: 0 !important;
position: relative;

> div {
position: relative;
}

&:before {
background: #fff;
content: "";
display: block;
position: absolute;
bottom: 50%;
left: 0;
right: 0;
top: 0;
}
`;


const IngredientsTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;
const EquipmentTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;
const RecipeDescriptionTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;
const RecipeTipsTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;
const RecipeYoutubeVideoTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;
const RecommendedPostsTitle = styled('h2')` ${tw`text-gray-800 py-6 px-2`}`;

const PostTaxonomies = styled('div')` ${tw`flex content-start text-left sm:flex-wrap flex-wrap h-30 bg-gray-200 my-10 p-10`}`;
const CuisineTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const DietsTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const DishesTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const MealsTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const IngredientsIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const EquipmentIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const DescriptionIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const RecipeTipsIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
