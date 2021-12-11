import React from "react";
import MealTypeStatic from "./data/MealTypeStatic";

const MealType = () => {
  const breakfast = MealTypeStatic.filter((meal, index) => index < 3);
  const displayImage = breakfast.map((recipe) => {
    return (
      <div className="eachImage col">
        <img src={recipe.image}></img>
        <p className="cuisines">
          {recipe.cuisines[0] !== undefined
            ? `${recipe.cuisines[0]}, ${recipe.cuisines[1]}, ${recipe.cuisines[2]}`
            : `${recipe.dishTypes[0]} `}
        </p>
        <p className="title">{recipe.title}</p>
      </div>
    );
  });

  return (
    <div className="container mealTypeContainer">
      <h2 id="typeOne">Breakfast</h2>
      <div className="eachType row">{displayImage}</div>
      <h2 id="typeTwo">Main course </h2>
      <div className="eachType row">
        <div className="eachImage col">
          <img src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"></img>
          <p>Description</p>
        </div>
        <div className="eachImage col">
          <img src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"></img>
          <p>Description</p>
        </div>
        <div className="eachImage col">
          <img src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"></img>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default MealType;
