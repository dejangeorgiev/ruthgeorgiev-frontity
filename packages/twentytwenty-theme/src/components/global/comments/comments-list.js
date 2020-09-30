import React from "react";
import {connect, styled} from "frontity";
import Collapse from "@kunukn/react-collapse";
import tw from "tailwind.macro";
import DownRightArrow from "../icons/svg/DownRightArrow.svg"

const initialState = false;

function reducer(status, {type, index}) {
    switch (type) {
        case "expand-all":
            return true;
        case "collapse-all":
            return false;
        case "toggle":
            status[index] = !status[index];
            return [...status];

        default:
            throw new Error();
    }
}

function Block({isOpen, title, onToggle, children}) {
    return (
        <div className="block">
            <button className="btn toggle" onClick={onToggle}>
                <span>{title}</span>

            </button>
            <Collapse layoutEffect isOpen={isOpen}>
                {children}
            </Collapse>
        </div>
    );
}

const CommentsList = ({state, libraries, postId}) => {
    const data = state.source.get(`@comments/${postId}`);
    const Html2React = libraries.html2react.Component;

    const [status, dispatch] = React.useReducer(reducer, initialState);

    return (
        <>
            <div>
                <Header>
                    {status === false ? (
                        <Button
                            onClick={() => dispatch({type: "expand-all"})}
                            disabled={status === true}
                        >
                            Read all comments
                        </Button>
                    ) : (

                        <Button
                            onClick={() => dispatch({type: "collapse-all"})}
                            disabled={status === false}
                        >
                            Hide all comments
                        </Button>
                    )}

                </Header>
                <Container>
                    <Block isOpen={status}
                    >
                        {data.items.map(({id, children}) => {
                            return (
                                <>
                                    <Comment>
                                        {
                                            state.source.comment[id].author_avatar_urls[48] &&
                                            <CommentAuthorAvatarContainer>
                                                <CommentAuthorAvatarImage
                                                    src={state.source.comment[id].author_avatar_urls[48]}
                                                    alt={state.source.comment[id].author_name}/>
                                            </CommentAuthorAvatarContainer>
                                        }

                                        <CommentAuthorNameContainer>
                                            <CommentAuthorName>{state.source.comment[id].author_name || "Anonymous"}</CommentAuthorName>
                                        </CommentAuthorNameContainer>

                                        <CommentContent>
                                            <Html2React
                                                html={state.source.comment[id].content.rendered}
                                            />
                                        </CommentContent>
                                    </Comment>
                                    {children && children.map(({id}) => {
                                        return (
                                            <Reply>
                                                <ReplyIcon>
                                                    <img src={DownRightArrow} alt="Reply To Ruth Georgiev Post Icon"/>
                                                </ReplyIcon>
                                                <ReplyComment>
                                                    {
                                                        state.source.comment[id].author_avatar_urls[48] &&
                                                        <CommentAuthorAvatarContainer>
                                                            <CommentAuthorAvatarImage
                                                                src={state.source.comment[id].author_avatar_urls[48]}
                                                                alt={state.source.comment[id].author_name}/>
                                                        </CommentAuthorAvatarContainer>
                                                    }
                                                    <CommentAuthorNameContainer>
                                                        <CommentAuthorName>{state.source.comment[id].author_name || "Anonymous"}</CommentAuthorName>
                                                    </CommentAuthorNameContainer>

                                                    <CommentContent>
                                                        <Html2React
                                                            html={state.source.comment[id].content.rendered}
                                                        />
                                                    </CommentContent>
                                                </ReplyComment>
                                            </Reply>
                                        )
                                    })}
                                </>
                            );
                        })}
                    </Block>
                </Container>
            </div>
        </>
    );
};

export default connect(CommentsList);

const Header = styled('header')` ${tw`my-10`}`;
const Button = styled('button')` ${tw`w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 px-4 border-b-4 cursor-pointer border-solid border-2 border-gray-800 rounded`}`;

const Container = styled('div')` ${tw``}`;

const Comment = styled('div')` ${tw`bg-gray-100 my-1 text-left p-4`}`;

const CommentAuthorAvatarContainer = styled('div')` ${tw`mb-4`}`;
const CommentAuthorAvatarImage = styled('img')` ${tw`rounded-full`}`;

const CommentAuthorNameContainer = styled('div')` ${tw`block`}`;
const CommentAuthorName = styled('h6')` ${tw`text-bold p-0 m-0`}`;

const CommentContent = styled('div')` ${tw`block `}`;

const ReplyComment = styled('div')` ${tw`ml-2 bg-gray-100 my-1 text-left p-4 w-full`}`;
const Reply = styled('div')` ${tw`flex`}`;
const ReplyIcon = styled('div')` ${tw`w-24`}`;

