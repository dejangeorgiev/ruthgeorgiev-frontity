import React from 'react';
import {connect, styled} from "frontity";

const RecipeTip = ({key, title, description}) => {

    return (
        <div>
            <p>{key}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default connect(RecipeTip);
