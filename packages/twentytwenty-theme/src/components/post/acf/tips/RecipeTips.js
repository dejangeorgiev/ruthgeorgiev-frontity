import React from 'react';
import {connect, styled} from "frontity";
import RecipeTip from "./RecipeTip";

const RecipeTips = ({state, id}) => {

    const post = state.source.post[id];

    const tips = post.acf['postfieldgroup.tips'];

    return (
        tips.map((tip, index) => {
                return (
                    <RecipeTip
                        key={index}
                        title={tip['postfieldgroup.tips.title']}
                        description={tip['postfieldgroup.tips.description']}
                    />
                )
            }
        )
    );
};

export default connect(RecipeTips);
