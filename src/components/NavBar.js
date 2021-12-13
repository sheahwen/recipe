import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearchActions } from "../store/inputSearch";
import { inputSuggestionsActions } from "../store/inputSuggestions";
import searchType, { searchTypeActions } from "../store/searchType";

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
      <a>Home</a>
      <a>Meal type</a>
      <a>Shopping List</a>
      <a>Favourites</a>
      <div id="inputDiv">
        <input
          placeholder="Search Recipes"
          type="text"
          value={input}
          onChange={handleInputChange}
        ></input>
        <i className="fa fa-search" onClick={updateInput}></i>
      </div>
    </nav>
  );
};

export default NavBar;
