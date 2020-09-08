import {connect, styled} from "frontity";
import React, {useRef} from "react";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
} from "react-instantsearch/dom";

import AlgoliaSearch from 'algoliasearch/lite';

const searchClient = AlgoliaSearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
)

const Hit =({hit})=>
    <div>
<div>
    <img src={hit.title.rendered}/>
</div>
    </div>

const Sidebar = () =>
    <div>

    </div>

const Content =()=>
    <div>
        <Hits hitComponent={Hit} />
    </div>




const SearchAlgolia = ({state, actions, libraries}) => {


    return (
        <InstantSearch
            indexName="prod_RG"
            searchClient={searchClient}
        >

            <header>
                <SearchBox/>
            </header>

            <main>
                <Sidebar/>
                <Content/>
            </main>
        </InstantSearch>
    );
};

export default connect(SearchAlgolia);
