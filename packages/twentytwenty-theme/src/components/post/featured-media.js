import React from "react";
import {connect, styled} from "frontity";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";

const FeaturedMedia = ({state, id, className}) => {
    const media = state.source.attachment[id];

    if (!media) return null;

    const srcset =
        Object.values(media.media_details.sizes)
            // Get the url and width of each size.
            .map((item) => [item.source_url, item.width])
            // Recude them to a string with the format required by `srcset`.
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

    return (
        <Figure>
            <SectionImageContainer size="medium">
                <Image
                    alt={media.title.rendered}
                    src={media.source_url}
                    srcSet={srcset}
                    className="lazyload"
                />
            </SectionImageContainer>

        </Figure>
    );
};

export default connect(FeaturedMedia);

const Figure = styled.figure`
  position: relative;EntryCategories
`;

const SectionImageContainer = styled(SectionContainer)`
width:100% !important;
`;

const Image = styled(Img)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
  height: auto;
`;
