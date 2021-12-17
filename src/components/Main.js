import React from "react";
import MealType from "./MealType";
import SearchArea from "./search_section/SearchArea";

const Main = () => {
  return (
    <div className="container">
      <div className="row">
        <MealType></MealType>
      </div>
      <div className="row">
        <SearchArea></SearchArea>
      </div>
    </div>
  );
};

export default Main;
