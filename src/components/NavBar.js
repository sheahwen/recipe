import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { inputSearchActions } from "../store/inputSearch";
import { searchTypeActions } from "../store/searchType";
import { NavLink } from "react-router-dom";
import { mealSearchActions } from "../store/mealSearch";
import Logo from "./broccoli.png";
import GetDataUrl from "../hooks/GetDataUrl";

const NavBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const updateInput = () => {
    setSuggestions([]);
    setInput("");
    dispatch(inputSearchActions.setInputSearch(input));
    dispatch(searchTypeActions.setSearchType("name"));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMealClick = (event) => {
    dispatch(mealSearchActions.setMealSearch(event.target.innerHTML));
  };

  const getData = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    setSuggestions(parsedData.map((obj) => obj.title));
  };

  useEffect(() => {
    if (input !== "") {
      const url = GetDataUrl("autocomplete", input);
      getData(url);
    }
  }, [input]);

  const handleAutocomplete = (event) => {
    setInput(event.target.innerText);
  };

  const printSuggestions = suggestions.map((suggestion) => {
    return (
      <div className="suggestions" onClick={handleAutocomplete}>
        {suggestion}
      </div>
    );
  });

  return (
    <nav>
      <img src={Logo}></img>
      <NavLink to="/">Home</NavLink>
      <div className="dropdown">
        <NavLink to="/meal-type" id="typeOnBar">
          Meal type
        </NavLink>
        <div className="dropdownMeals">
          <NavLink
            className="mealRef"
            to="/selected-meal"
            onClick={handleMealClick}
          >
            main course
          </NavLink>
          <NavLink
            className="mealRef"
            to="/selected-meal"
            onClick={handleMealClick}
          >
            dessert
          </NavLink>
          <NavLink
            className="mealRef"
            to="/selected-meal"
            onClick={handleMealClick}
          >
            appetizer
          </NavLink>
          <NavLink
            className="mealRef"
            to="/selected-meal"
            onClick={handleMealClick}
          >
            salad
          </NavLink>
          <NavLink
            className="mealRef"
            to="/selected-meal"
            onClick={handleMealClick}
          >
            beverage
          </NavLink>
        </div>
      </div>
      <NavLink to="/shopping-list">Shopping List</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
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
        {input !== "" && printSuggestions}
      </div>
    </nav>
  );
};

export default NavBar;
