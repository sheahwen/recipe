import React from "react";
import IngredientStatic from "../data/IngredientStatic";

const Ingredient = () => {
  const ingredientArrObj = IngredientStatic;
  const ingredientList = ingredientArrObj.map(
    (ingredient) =>
      ingredient.name +
      " " +
      Math.round(ingredient.amount.metric.value * 100) / 100 +
      ingredient.amount.metric.unit
  );
  const displayIngredientsLeft = ingredientList.map((ingredient, index) => {
    const length = ingredientList.length;
    return index < length / 2 && <p>{ingredient}</p>;
  });
  const displayIngredientsRight = ingredientList.map((ingredient, index) => {
    const length = ingredientList.length;
    return index >= length / 2 && <p>{ingredient}</p>;
  });

  return (
    <div className="container ingredientContainer">
      <h2>Ingredients</h2>
      <div className="row">
        <div className="col-6">{displayIngredientsLeft}</div>
        <div className="col-6">{displayIngredientsRight}</div>
      </div>
    </div>
  );
};

export default Ingredient;
