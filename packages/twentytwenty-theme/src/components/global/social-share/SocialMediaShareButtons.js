import React from 'react';
import {connect, styled} from "frontity";

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    EmailIcon,
} from 'react-share';

const SocialMediaShareButtons = ({url, media, alt, title, children, hashtag, hashtags}) => {

    return (
        <div>
            <FacebookShareButton
                url={url}
                media={media}
                quote={title}
                hashtag={hashtag}
            >
                <FacebookIcon
                    size={50}
                    round={true}
                />
            </FacebookShareButton>

            <TwitterShareButton
                url={url}
                title={title}
                children={children}
                hashtags={hashtags}
            >
                <TwitterIcon
                    size={50}
                    round={true}
                />
            </TwitterShareButton>

            <PinterestShareButton
                media={media}
                description={alt}
                url={url}
                children={children}>
                <PinterestIcon
                    size={50}
                    round={true}
                />
            </PinterestShareButton>

            <LinkedinShareButton
                url={url}
                children={children}
            >
                <LinkedinIcon
                    size={50}
                    round={true}
                />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={url}
                title={title}
                children={children}
            >
                <WhatsappIcon
                    size={50}
                    round={true}
                />
            </WhatsappShareButton>

            <RedditShareButton
                url={url}
                children={children}
                title={title}
            >
                <RedditIcon
                    size={50}
                    round={true}
                />
            </RedditShareButton>

            <EmailShareButton
                url={url}
                children={children}
                subject={title}
            >
                <EmailIcon
                    size={50}
                    round={true}
                />
            </EmailShareButton>
        </div>

    );
};

export default connect(SocialMediaShareButtons);
