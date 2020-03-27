import React from "react";

const search = () => {
    return(
        <div id='search_wrapper"'>
            <svg className="search_box">
                <rect fill="rgba(125,125,125,0.431)" stroke="rgba(112,112,112,1)" stroke-width="1px"
                      stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" shape-rendering="auto"
                      id="Rectangle_1" rx="32.5" ry="32.5" x="0" y="0" width="758" height="65">
                </rect>
            </svg>
            <img id="images" src="./misc/navigation_drawer.png"/>
                <div id="Make_a_search">
                    <span>Make a search...</span>
                </div>
        </div>
    )
};

export default search
