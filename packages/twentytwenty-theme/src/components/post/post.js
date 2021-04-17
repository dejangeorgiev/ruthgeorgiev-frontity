import loadable from '@loadable/component'

import {styled, connect, Slot} from "frontity";
import React, {useEffect} from "react";
import {
    EntryContent,
    Post as _Post,
    PostHeader,
    PostInner,
    SectionContainer,
} from "./post-item";

import YoutubeVideo from "./acf/YoutubeVideo";
import YouTubeIcon from "../global/icons/YouTubeIcon";
import RecommendedPosts from "./acf/recommended/posts/RecommendedPosts";

import tw from 'tailwind.macro'
import EasyRecipe from "../global/icons/png/EasyRecipe.png"
import ModernCookingTools from "../global/icons/png/ModernCookingTools.png"
import ProfessionalChefFemale from "../global/icons/png/ProfessionalChefFemale.png"
import RecipeTipsIconPng from "../global/icons/png/RecipeTips.png"
import PageCarousel from "../page/acf/Content/Carousel/PageCarousel";
import IngredientItem from "./acf/ingredients/IngredientItem";
import GoogleAds from "./ads/GoogleAds";

const FeaturedMedia = loadable(() => import('./featured-media'))
const PostCategories = loadable(() => import('./post-categories'))
const PostMeta = loadable(() => import('./post-meta'))
const PostTags = loadable(() => import('./post-tags'))
const Ingredients = loadable(() => import('./acf/ingredients/Ingredients'))

//const AdditionalIngredients = loadable(() => import('./acf/ingredients/AdditionalIngredients'))
const IngredientsRecipeName = loadable(() => import('./acf/ingredients/IngredientsRecipeName'))
const Sponsored = loadable(() => import('./acf/sponsored/Sponsored'))
const Badge = loadable(() => import('./acf/badges/Badge'))
const Equipment = loadable(() => import('./acf/equipment/Equipment'))
const RecipeDescription = loadable(() => import('./acf/RecipeDescription'))
const RecipeNote = loadable(() => import('./acf/RecipeNote'))
const RecipeTips = loadable(() => import('./acf/tips/RecipeTips'))
const Cuisine = loadable(() => import('./acf/cuisine/Cuisine'))
const Diets = loadable(() => import('./acf/diets/Diets'))
const Dishes = loadable(() => import('./acf/dishes/Dishes'))
const Meals = loadable(() => import('./acf/meals/Meals'))

const RecipePreparationTime = loadable(() => import('./acf/RecipePreparationTime'))
const RecipeCookingTime = loadable(() => import('./acf/RecipeCookingTime'))
const RecipeServings = loadable(() => import('./acf/RecipeServings'))
const Comments = loadable(() => import('../global/comments/index'))
const SocialMediaShareButtons = loadable(() => import('../global/social-share/SocialMediaShareButtons'))
const GoogleStructuredDataForRecipe = loadable(() => import('../global/marketing/google/GoogleStructuredDataForRecipe'))
const SponsoredBadge = loadable(() => import('./acf/sponsored/SponsoredBadge'))

const Post = ({state, actions, libraries}) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const post = state.source[data.type][data.id];

    const postUrl = state.frontity.url + state.router.link;

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

    const additionalContents = post.acf['postfieldgroup.contents'];
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
        <PostArticle id="target-el">


            {/* Add Google Structured data for recipe */}
            {<GoogleStructuredDataForRecipe id={post.id}/>}

            <Header>
                <SectionContainer>
                    <PostTitle className="heading-size-1">{post.title.rendered}</PostTitle>

                    {/* If the post has categories, render the categories */}
                    {post.categories && <PostCategories categories={categories}/>}

                    {/* The post's metadata like author, publish date, and comments */}
                    <PostMeta item={post}/>

                    {state.theme.featuredMedia.showOnPost && (
                        <FeaturedImage id={post.featured_media} isSinglePost={true}/>
                    )}

                    <SocialMediaShareButtons
                        url={postUrl}
                        media={media.source_url}
                        alt={media.alt_text}
                        title={post.title.rendered}
                        children={post.title.rendered}
                        hashtag='#ruthgeorgiev'
                        hashtags={['ruthgeorgiev', 'recipes']}
                    />

                    {/* If the post has tags, render it */}
                    {post.tags && <PostTags tags={tags}/>}

                    {/* if the post has servings, render it */}
                    {post.acf['postfieldgroup.servings'] && <RecipeServings id={post.id}/>}

                    {/* if the post has preparation time, render it */}
                    {post.acf['postfieldgroup.preparation_time'] && <RecipePreparationTime id={post.id}/>}

                    {/* if the post has cooking time, render it */}
                    {post.acf['postfieldgroup.cooking_time'] && <RecipeCookingTime id={post.id}/>}

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

                    {/*<AdBannerBody name="before-description-ad"/>*/}

                    {/* if the post has description, render it */}
                    {post.acf['postfieldgroup.description'] &&

                    <SectionTitle>
                        <SectionTitleHighlightContainer>
                            <SectionTitleHighlight>
                                How to do it?
                            </SectionTitleHighlight>

                        </SectionTitleHighlightContainer>
                        <DescriptionIcon
                            src={ProfessionalChefFemale} alt="Professional Chef Female"/>

                    </SectionTitle>
                    }
                    {post.acf['postfieldgroup.description'] && <RecipeDescription id={post.id}/>}

                    {/*<AdBannerBodyMobile name="before-description-ad-mobile"/>*/}

                    {/* if the post has badge / sponsored link, render it */}
                    {post.acf['postfieldgroup.badge'] &&
                    <SectionTitle>
                        <SectionTitleHighlightContainer>
                            <SectionTitleHighlight>
                                Products i use or have tried
                            </SectionTitleHighlight>
                        </SectionTitleHighlightContainer>
                    </SectionTitle>}
                    {post.acf['postfieldgroup.badge'] && <Badge id={post.id}/>}

                    <GoogleAds/>

                    {/* If the post has ingredients, render it */}
                    {post.acf['postfieldgroup.ingredients'] &&
                    <SectionTitle>
                        <SectionTitleHighlightContainer>
                            <SectionTitleHighlight>
                                Ingredients
                            </SectionTitleHighlight>
                        </SectionTitleHighlightContainer>

                        <IngredientsIcon src={EasyRecipe}
                                         alt="Recipe Ingredients"/></SectionTitle>}
                    {/* if recipe name is added */}
                    {post.acf['postfieldgroup.recipe_name'] &&
                    <IngredientsRecipeName id={post.id} name={post.acf['postfieldgroup.recipe_name']}/>}
                    {post.acf['postfieldgroup.ingredients'] && <Ingredients id={post.id}/>}

                    {/* if additional ingredients are added */}

                    {
                        additionalContents &&
                        <div>
                            {Object.keys(additionalContents)
                                .map(function (key, i) {
                                    console.log(additionalContents[key].acf_fc_layout)
                                    if (additionalContents[key].acf_fc_layout === 'postfieldgroup.contents.ingredients') {
                                        const ingredientRecipeName = additionalContents[key]['postfieldgroup.contents.ingredients.recipe_name']
                                        const additionalIngredients = additionalContents[key]['postfieldgroup.contents.ingredients.ingredient']
                                        return <>
                                            <IngredientsRecipeName
                                                key={i}
                                                id={post.id}
                                                name={ingredientRecipeName}
                                            />
                                            {Object.keys(additionalIngredients).map(function (key) {
                                                const name = additionalIngredients[key]['postfieldgroup.contents.ingredients.ingredient.name']
                                                const amount = additionalIngredients[key]['postfieldgroup.contents.ingredients.ingredient.amount']
                                                const measure = additionalIngredients[key]['postfieldgroup.contents.ingredients.ingredient.measure']
                                                return <IngredientItem
                                                    key={key}
                                                    amount={amount}
                                                    measure={measure}
                                                    name={name}
                                                />
                                            })
                                            }
                                        </>
                                    }
                                })
                            }
                        </div>
                    }

                    {/* If the post has equipment, render it */}
                    {post.acf['postfieldgroup.equipment'] &&
                    <SectionTitle>
                        <SectionTitleHighlightContainer>
                            <SectionTitleHighlight>
                                Equipment
                            </SectionTitleHighlight>
                        </SectionTitleHighlightContainer>
                         <EquipmentIcon src={ModernCookingTools} alt="Recipe Equipment"/>
                    </SectionTitle>}
                    {post.acf['postfieldgroup.equipment'] && <Equipment id={post.id}/>}

                    {/* if the post has affiliate / sponsored link, render it */}
                    {post.acf['postfieldgroup.sponsored'] && <Sponsored id={post.id}/>}

                    <GoogleAds/>

                    {/* if the post has tips, render it */}
                    {post.acf['postfieldgroup.tips'] &&
                    <SectionTitle>
                        <SectionTitleHighlightContainer>
                            <SectionTitleHighlight>
                                Tips
                            </SectionTitleHighlight>
                        </SectionTitleHighlightContainer>
                         <RecipeTipsIcon src={RecipeTipsIconPng} alt="Recipe tips"/>
                    </SectionTitle>}
                    {post.acf['postfieldgroup.tips'] && <RecipeTips id={post.id}/>}

                    {/* if the post has description, render it */}
                    {post.acf['postfieldgroup.note'] && <RecipeNote id={post.id}/>}

                    {/* if the post has a YouTube video, render it */}
                    {/*post.acf['postfieldgroup.video'] && <RecipeYoutubeVideoTitle>Watch how i make it <YouTubeIcon/></RecipeYoutubeVideoTitle>*/}
                    {/*post.acf['postfieldgroup.video'] && <YoutubeVideo videoId={post.acf['postfieldgroup.video']}/>*/}

                    {/* If the post has an excerpt (short summary text), we render it */}
                    {
                        post.content && (
                            <PostInner size="medium">
                                <EntryContent>
                                    <Html2React html={post.content.rendered}/>
                                </EntryContent>
                            </PostInner>
                        )
                    }

                    <SocialMediaShareButtons
                        url={postUrl}
                        media={media.source_url}
                        alt={media.alt_text}
                        title={post.title.rendered}
                        children={post.title.rendered}
                        hashtag='#ruthgeorgiev'
                        hashtags={['ruthgeorgiev', 'recipes']}
                    />

                    {<Comments postId={post.id} id="comments"/>}

                    <GoogleAds/>
                </SectionContainer>
            </Header>

            {/* if the post has sponsored badge / sponsored link, render it */}
            {post.acf['postfieldgroup.sponsored_badge'] && <SponsoredBadge id={post.id}/>}

            {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */
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

const FeaturedImage = styled(FeaturedMedia)` ${tw`max-h-auto`} `;

const PostTitle = styled('h1')` ${tw`text-6xl sm:text-8xl `}`;

const SectionTitle = styled('h2')` ${tw`z-10 text-gray-800 font-normal py-6 px-2 uppercase`}`;


const SectionTitleHighlightContainer = styled('span')` ${tw`relative inline-block`}`;
const SectionTitleHighlight = styled.span` 
position: relative;
&:before {
    content: ' ';
    display: block;
    height: 90%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
    border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
}`;

const RecipeYoutubeVideoTitle = styled('h2')` ${tw`text-gray-800 font-normal py-6 px-2 uppercase`}`;
const RecommendedPostsTitle = styled('h2')` ${tw`text-gray-800 font-normal text-center py-6 px-2 uppercase`}`;
const AdBannerBody = styled(Slot)` ${tw`flex justify-center m-10 md:hidden`}`;
const AdBannerBodyMobile = styled(Slot)` ${tw`flex justify-center m-10 md:hidden`}`;

const PostTaxonomies = styled('div')` 
background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
       height: 90%;
    width: 100%;

${tw`flex content-start text-left sm:flex-wrap flex-wrap h-30 my-10 p-10`}`;
const CuisineTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const DietsTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const DishesTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const MealsTaxonomy = styled('div')` ${tw`w-full p-1`}`;
const IngredientsIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const EquipmentIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const DescriptionIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const RecipeTipsIcon = styled('img')` ${tw`inline-block w-24 align-bottom`}`;
const HigLightedText = styled('span')` ${tw`bg-gray-200 font-normal px-5 rounded-full`}`;
