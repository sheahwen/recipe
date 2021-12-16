import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSearchActions } from "../store/inputSearch";
import { searchTypeActions } from "../store/searchType";
import { NavLink } from "react-router-dom";
import { mealSearchActions } from "../store/mealSearch";
import Logo from "./broccoli.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const inputSearch = useSelector((state) => state.inputSearch.input);
  const [input, setInput] = useState("");

  const updateInput = () => {
    dispatch(inputSearchActions.setInputSearch(input));
    dispatch(searchTypeActions.setSearchType("name"));
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMealClick = (event) => {
    console.log(event.target.innerHTML);
    dispatch(mealSearchActions.setMealSearch(event.target.innerHTML));
  };

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
      </div>
    </nav>
  );
};

export default NavBar;
