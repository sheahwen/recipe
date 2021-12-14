import React from "react";
import IngredientsSearch from "./IngredientsSearch";
import DietSearch from "./DietSearch";
import MealTypeSearch from "./MealTypeSearch";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchTypeActions } from "../../store/searchType";

const SearchArea = () => {
  const dispatch = useDispatch();
  const handleSearchButton = () => {
    dispatch(searchTypeActions.setSearchType("advanced"));
  };

  return (
    <div id="searchArea">
      <p id="advancedText">Advanced Filters</p>
      <div className="container filterContainer">
        <div className="row">
          <div className="col-3">
            <div className="searchBy">Ingredients</div>
          </div>
          <div className="col-3">
            <div className="searchBy">Dietary Concerns</div>
          </div>
          <div className="col-6">
            <div className="searchBy">Meal Type</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <IngredientsSearch></IngredientsSearch>
          </div>
          <div className="col-3">
            <DietSearch></DietSearch>
          </div>
          <div className="col-6">
            <MealTypeSearch></MealTypeSearch>
          </div>
        </div>
      </div>
      <Link to="/search-results">
        <button onClick={handleSearchButton}>Search</button>
      </Link>
    </div>
  );
};

export default SearchArea;
