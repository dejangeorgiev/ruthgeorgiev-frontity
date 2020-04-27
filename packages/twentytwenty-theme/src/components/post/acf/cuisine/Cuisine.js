import { connect, styled, decode } from "frontity";
import React from "react";

const Cuisine = ({ cuisine}) => {
    // Remove empty or undefined categories
    const CuisineItems = cuisine.filter(Boolean);


    if (CuisineItems.length === 0) {
        return null;
    }


    return (
        <div>
            {CuisineItems.map((cuisine) => (
                <div key={cuisine.id} link={cuisine.link}>
                    {decode(cuisine.name)}
                </div>
            ))}
        </div>

    );
};

export default connect(Cuisine);

