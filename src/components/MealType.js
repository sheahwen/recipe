import React from "react";
import MealTypeStatic from "./data/MealTypeStatic";
import Card from "./Card";

const MealType = () => {
  const breakfast = MealTypeStatic.filter((meal, index) => index < 3);
  const displayImage = breakfast.map((recipe) => {
    return (
      <Card
        image={recipe.image}
        cuisines={recipe.cuisines}
        dishTypes={recipe.dishTypes}
        title={recipe.title}
      ></Card>
    );
  });

  return (
    <div className="container mealTypeContainer">
      <div className="titleSeeMore">
        <h2 id="typeOne">Breakfast</h2>
        <p>See more</p>
      </div>
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
