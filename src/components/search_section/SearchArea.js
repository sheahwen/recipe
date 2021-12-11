import React from "react";
import IngredientsSearch from "./IngredientsSearch";
import DietSearch from "./DietSearch";
import MealTypeSearch from "./MealTypeSearch";

const SearchArea = () => {
  return (
    <div id="searchArea">
      <p id="advancedText">Advanced Filters</p>
      <div className="container filterContainer">
        <div className="row">
          {/* <div className="col-3 searchAttribute">Ingredients</div>
          <div className="col-3 searchAttribute">Ingredients</div>
          <div className="col-3 searchAttribute">Ingredients</div> */}
          <IngredientsSearch></IngredientsSearch>
          <DietSearch></DietSearch>
          <MealTypeSearch></MealTypeSearch>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchArea;
