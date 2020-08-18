import {connect, styled, decode} from "frontity";
import React from "react";
import Link from "../../../link";

const Meals = ({meals}) => {

    const MealTypes = meals.filter(Boolean);

    if (MealTypes.length === 0) {
        return null;
    }

    return (
        <div>
            <span>Meals:</span>
            {MealTypes.map((meals) => (
                <MealTag key={meals.id} link={meals.link}>
                    {decode(meals.name)}
                </MealTag>
            ))}
        </div>
    );
};

export default connect(Meals);

const MealTag = styled(Link)`
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