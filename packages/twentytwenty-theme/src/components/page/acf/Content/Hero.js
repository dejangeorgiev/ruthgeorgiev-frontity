import React from "react";
import {connect, styled} from "frontity";




const Hero = ({state, id, className}) => {


    return (
<h1>Hero</h1>
    );
};

export default connect(Hero);

const Title = styled('h3')`
  color: #fff;
`;