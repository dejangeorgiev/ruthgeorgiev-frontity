import React from 'react';
import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import EditIcon from "../../global/icons/EditIcon";


const RecipeNote = ({state, id}) => {

    const post = state.source.post[id];

    const note = post.acf['postfieldgroup.note'];

    return (
        <Note>
            <NoteText>
                <EditIcon/>
                <NoteTextBold>Note: </NoteTextBold>{note}
            </NoteText>
        </Note>
    );
};

export default connect(RecipeNote);

const Note = styled('div')` ${tw`font-mono text-gray-700 text-2xl text-left border-solid border-3 inline-block rounded border-blue-200 p-5 mt-16`}`;
const NoteTextBold = styled('span')` ${tw`font-bold pl-3`}`;
const NoteText = styled('span')` ${tw`inline-block`}`;