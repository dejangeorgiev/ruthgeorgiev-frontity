import React from "react";
import {connect} from "frontity";


const CommentsSuccess = ({actions, state, postId}) => {
    const form = state.comments.forms[postId];
    return (
        <>
            <p>"The comment was submitted successfully!"</p>
        </>
    );
};

export default connect(CommentsSuccess);
