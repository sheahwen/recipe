import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { advancedSearchActions } from "../../store/advancedSearch";
import Bullet from "./Bullet";

const IngredientsSearch = () => {
  const dispatch = useDispatch();
  const ingredientsArr = useSelector(
    (state) => state.advancedSearch.ingredients
  );

  const [input, setInput] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddButton = () => {
    console.log("add clicked");
    dispatch(advancedSearchActions.setIngredient(input));
  };

  const addBullet = ingredientsArr.map((ingredient) => {
    return <Bullet name={ingredient}></Bullet>;
  });

  return (
    <>
      <div id="inputAdd">
        <input
          placeholder="Ingredient"
          value={input}
          onChange={handleInput}
        ></input>
        <button onClick={handleAddButton}>Add</button>
      </div>
      <div>{addBullet}</div>
    </>
  );
};

export default IngredientsSearch;
