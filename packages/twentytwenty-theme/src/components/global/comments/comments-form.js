import React from "react";
import {connect, styled} from "frontity";
import Loading from "../../loading";
import CommentsSuccess from "./comments-success";
import CommentsError from "./comments-error";
import tw from "tailwind.macro";

const CommentsForm = ({actions, state, postId}) => {
    const form = state.comments.forms[postId];
    return (
        <CommentForm>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    actions.comments.submit(postId);
                }}
            >
                <FormFieldContainer>
                    <FormFieldInputContainer>
                        <Label>
                            Name
                        </Label>
                        <Input
                            name="author_name"
                            onChange={(e) =>
                                actions.comments.updateFields(postId, {
                                    authorName: e.target.value
                                })
                            }
                            value={state.comments.forms[postId]?.fields?.authorName || ""}
                        />
                        {form?.errors?.authorName}

                    </FormFieldInputContainer>
                </FormFieldContainer>

                <FormFieldContainer>
                    <FormFieldInputContainer>
                        <Label>
                            E-mail
                        </Label>
                        <Input
                            name="author_email"
                            onChange={(e) =>
                                actions.comments.updateFields(postId, {
                                    authorEmail: e.target.value
                                })
                            }
                            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
                        />
                        {form?.errors?.authorEmail}

                    </FormFieldInputContainer>
                </FormFieldContainer>

                <FormFieldContainer>
                    <FormFieldInputContainer>
                        <Label>
                            Comment
                        </Label>
                        <Textarea
                            name="content"
                            onChange={(e) =>
                                actions.comments.updateFields(postId, {
                                    content: e.target.value
                                })
                            }
                            value={state.comments.forms[postId]?.fields?.content || ""}
                        />
                        {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
                        {form?.errors?.content}

                    </FormFieldInputContainer>
                </FormFieldContainer>


                {/* If the form is submitting, we can show some kind of a loading state */}
                {form?.isSubmitting && <Loading/>}


                {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
                {form?.errorMessage && <CommentsError message={form?.errorMessage}/>}

                {/* If the form was submitted successfully we can show a confirmation */}
                <div>
                    {form?.isSubmitted && <CommentsSuccess/>}
                </div>


                <Button type="submit"/>

            </Form>
        </CommentForm>
    );
};

export default connect(CommentsForm);


const CommentForm = styled('div')` ${tw`overflow-hidden flex items-center justify-center`}`;
const Form = styled('form')` ${tw`w-full max-w-lg`}`;


const FormFieldContainer = styled('div')` ${tw`flex flex-wrap -mx-3 mb-6`}`;
const FormFieldInputContainer = styled('div')` ${tw`w-full px-3`}`;
const Label = styled('label')` ${tw`block uppercase tracking-wide text-gray-800 font-bold mb-2`}`;
const Input = styled('input')` ${tw`block w-full bg-gray-100 text-gray-700 border-2 border-solid border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}`;
const Textarea = styled('textarea')` ${tw`block w-full bg-gray-100 text-gray-700 border-2 border-solid border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48`}`;
const Button = styled('input')` ${tw`w-full px-3`}`;