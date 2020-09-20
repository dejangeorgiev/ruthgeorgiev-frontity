import React, {useEffect} from "react";
import {connect} from "frontity";
import CommentsList from "./comments-list";
import CommentsForm from "./comments-form";

const Comments = ({actions, state, postId}) => {
    useEffect(() => {
        actions.source.fetch(`@comments/${postId}`);
    }, []);
    const data = state.source.get(`@comments/${postId}`);

    return (
        data.isReady && (
            <>
                {data.items.length > 0 &&  <CommentsList postId={postId}/>}

                <h6>Add your comment here</h6>
                <CommentsForm postId={postId}/>
            </>
        )
    );
};

export default connect(Comments);
