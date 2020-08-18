import {connect, styled, decode} from "frontity";
import React from "react";
import Link from "../../../link";

const Cuisine = ({cuisine}) => {

    const CuisineItems = cuisine.filter(Boolean);

    if (CuisineItems.length === 0) {
        return null;
    }

    return (
        <div>
            <span>Cuisine:</span>
            {CuisineItems.map((cuisine) => (
                <CuisineTag key={cuisine.id} link={cuisine.link}>
                    {decode(cuisine.name)}
                </CuisineTag>
            ))}
        </div>

    );
};

export default connect(Cuisine);

const CuisineTag = styled(Link)`
  border-bottom: 0.15rem solid currentColor;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.036666667em;
  margin: 0.5rem 0 0 1rem;
  text-decoration: none;
  text-transform: uppercase;

  @media (min-width: 700px) {
    font-size: 1.5rem;
    margin: 1rem 0 0 2rem;
  }

  transition: border-bottom-color 150ms;
  :hover {
    background-color: #2d3748;
    border-bottom: 0.15rem solid currentColor;
    color: white;
  }
`;