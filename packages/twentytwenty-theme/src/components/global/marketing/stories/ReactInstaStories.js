import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Stories from 'react-insta-stories/src/';
import {beforeSSR} from "@frontity/tiny-router/src/actions";

const ReactInstaStories = ({}) => {




    const stories = [
        'https://admin.ruthgeorgiev.com/wp-content/uploads/2020/09/494A7490-2-scaled.jpg',
        {
            url: 'https://admin.ruthgeorgiev.com/wp-content/uploads/2020/09/494A7490-2-scaled.jpg',
            duration: 5000,
            header: {
                heading: 'Mohit Karekar',
                subheading: 'Posted 30m ago',
                profileImage: 'https://picsum.photos/100/100',
            },
        },
        {
            url: 'https://admin.ruthgeorgiev.com/wp-content/uploads/2020/09/494A7490-2-scaled.jpg',
            duration: 5000,
            //seeMore: SeeMore, // some component
        },
    ];

    //const time = post.acf['postfieldgroup.cooking_time'];
    //const timeUnit = post.acf['postfieldgroup.cooking_time_unit'];

    return (
        <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
        />
    );
};

export default connect(ReactInstaStories);
