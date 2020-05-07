import React from "react";
import {connect, styled} from "frontity";

import tw from 'tailwind.macro';


const Newsletter = ({actions}) => {


    return (
        <form>
            <input name="name"/>
            <input name="email"/>
            <button type="submit">send</button>
        </form>

    );
};

export default connect(Newsletter);

