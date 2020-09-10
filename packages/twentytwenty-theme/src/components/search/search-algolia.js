import {connect, styled} from "frontity";
import React, {useRef} from "react";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Pagination,
    ClearRefinements,
    RefinementList,
    Configure,
} from "react-instantsearch/dom";

import AlgoliaSearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';

const searchClient = AlgoliaSearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
)

const SearchAlgolia = ({state, actions, libraries}) => {

    return (

        <div className="ais-InstantSearch">
            <InstantSearch indexName="prod_RG" searchClient={searchClient}>
                <div className="left-panel">
                    <ClearRefinements />
                    <h2>Brands</h2>
                    <RefinementList attribute="brand" />
                    <Configure hitsPerPage={8} />
                </div>
                <div className="right-panel">
                    <SearchBox />
                    <Hits hitComponent={Hit} />
                    <Pagination />
                </div>
            </InstantSearch>
        </div>
    );
};

function Hit(props) {
    return (
        <div>
            <div className="hit-name">
                <Highlight attribute="title" hit={props.hit} />
            </div>
            <div className="hit-description">
                <Highlight attribute="excerpt" hit={props.hit} />
            </div>
        </div>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};


export default connect(SearchAlgolia);


