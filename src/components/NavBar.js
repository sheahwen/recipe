import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearchActions } from "../store/inputSearch";
import { inputSuggestionsActions } from "../store/inputSuggestions";
import { searchTypeActions } from "../store/searchType";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.inputSearch.input);
  const inputSuggestions = useSelector(
    (state) => state.inputSuggestions.suggestions
  );
  const [input, setInput] = useState("");

  const updateInput = () => {
    dispatch(inputSearchActions.setInputSearch(input));
    dispatch(searchTypeActions.setSearchType("name"));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/meal-type">Meal type</NavLink>
      <NavLink to="/shopping-list">Shopping List</NavLink>
      <NavLink to="/favorites">Favourites</NavLink>
      <div id="inputDiv">
        <input
          placeholder="Search Recipes"
          type="text"
          value={input}
          onChange={handleInputChange}
        ></input>
        <NavLink to="/search-results">
          <i className="fa fa-search" onClick={updateInput}></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
