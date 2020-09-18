import React from "react";
import {connect} from "frontity";


const CommentsError = ({actions, state, postId, message}) => {
    const form = state.comments.forms[postId];
    return (
        <>
            <div>ERROR: {message}</div>
        </>
    );
};

export default connect(CommentsError);
