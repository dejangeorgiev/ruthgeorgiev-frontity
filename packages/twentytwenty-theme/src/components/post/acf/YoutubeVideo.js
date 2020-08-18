import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import YouTube from "react-youtube";

const YoutubeVideo = ({videoId}) => {

    const opts = {
        height: '360',
        width: '640',
        playerVars: {rel: 0, showinfo: 0, ecver: 2}
    };

    return (
        <Video>
            <YouTube
                videoId={videoId}
                opts={opts}
            />
        </Video>
    );
};

export default connect(YoutubeVideo);

const Video = styled('div')` ${tw`flex justify-center`}`;