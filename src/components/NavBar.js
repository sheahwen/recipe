import React from "react";

const NavBar = () => {
  return (
    <nav>
      <a>Home</a>
      <a>Meal type</a>
      <a>Shopping List</a>
      <a>Favourites</a>
      <div id="inputDiv">
        <input placeholder="Search Recipes" type="text"></input>
        <i className="fa fa-search"></i>
      </div>
    </nav>
  );
};

export default NavBar;
