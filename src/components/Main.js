import React from "react";
import NavBar from "./NavBar";
import MealType from "./MealType";
import SearchArea from "./search_section/SearchArea";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <MealType></MealType>
      <SearchArea></SearchArea>
    </div>
  );
};

export default Main;
