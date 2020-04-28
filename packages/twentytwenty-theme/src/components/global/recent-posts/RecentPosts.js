import React from "react";
import {connect, styled} from "frontity";
import tw from 'tailwind.macro'

const RecentPosts = ({}) => {

    let Card = styled('div')` ${tw`max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg`};`;
    let Image = styled('img')`${tw`w-full`};`;
    let Contents = styled('div')`${tw`px-6 py-4`};`;
    let Title = styled('div')`${tw`font-bold text-xl mb-2`};`;
    let Excerpt = styled('p')`${tw`text-gray-700 text-base`};`;
    let HashTags = styled('div')`${tw`px-6 py-4`};`;
    let HashTag = styled('span')`${tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`};`;


    return (

        <Card>
            <Image src="https://admin.ruthgeorgiev.com/wp-content/uploads/2020/03/IMG_7068-scaled.jpg"
                   alt="Sunset in the mountains"/>
            <Contents>
                <Title>The Coldest Sunset</Title>
                <Excerpt>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </Excerpt>
            </Contents>
            <HashTags>
                <HashTag>#photography</HashTag>
                <HashTag>#travel</HashTag>
                <HashTag>#winter</HashTag>
            </HashTags>
        </Card>

    );
};

export default connect(RecentPosts);

