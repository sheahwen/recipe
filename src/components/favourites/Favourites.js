import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { selectedRecipeActions } from "../../store/selectedRecipe";

const Favourites = () => {
  const recipesArr = useSelector((state) => state.favourites.recipes);

  // LIFT ID FROM CARDS
  const dispatch = useDispatch();
  const handleLift = (clickedId) => {
    const recipeSelected = recipesArr.find(
      (recipe) => recipe.id === Number(clickedId)
    );
    dispatch(selectedRecipeActions.setRecipe(recipeSelected));
  };

  // CREATE CARDS
  const createCards = recipesArr.map((recipe, index) => {
    return (
      <Card
        image={recipe.image}
        cuisines={recipe.cuisines}
        dishTypes={recipe.dishTypes}
        title={recipe.title}
        id={recipe.id}
        liftingId={handleLift}
      ></Card>
    );
  });
  return (
    <div>
      <h2>Favourited recipes</h2>
      <div className="container favouritedContainer">
        <div className="row">{createCards}</div>
      </div>
    </div>
  );
};

export default Favourites;
