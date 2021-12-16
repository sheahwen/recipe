import React, { useEffect, useState } from "react";
import GetDataUrl from "../../hooks/GetDataUrl";
import IngredientStatic from "../data/IngredientStatic";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const Ingredient = (props) => {
  const dispatch = useDispatch();
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const URL = GetDataUrl("ingredients", props.recipeId);

  const getData = async (url) => {
    const data = await fetch(url);
    const parsedData = await data.json();
    setIngredientsArr(parsedData.ingredients);
  };

  useEffect(() => {
    getData(URL);
  }, []);

  const ingredientList = ingredientsArr.map((ingredient) => [
    ingredient.name,
    Math.round(ingredient.amount.metric.value * 100) / 100,
    ingredient.amount.metric.unit,
  ]);

  const ingredientListPair = [];
  for (let i = 0; i < ingredientList.length; i++) {
    if (i % 2 === 0) {
      if (ingredientList[i + 1] === undefined) {
        ingredientListPair.push([ingredientList[i]]);
      } else
        ingredientListPair.push([ingredientList[i], ingredientList[i + 1]]);
    }
  }

  const handleCart = (event) => {
    console.log("row is clicked");

    if (event.target.className === "fa fa-cart-plus") {
      // get ingredient information
      const ingredientClicked = {};
      const cart = event.target;
      ingredientClicked.name =
        cart.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      ingredientClicked.quantity =
        cart.parentNode.previousElementSibling.previousElementSibling.innerText;
      ingredientClicked.unit = cart.parentNode.previousElementSibling.innerText;

      dispatch(cartActions.addIngredient(ingredientClicked));
    }
  };

  const displayIngredients = ingredientListPair.map((ingredientPair, index) => {
    if (ingredientPair[1] !== undefined) {
      return (
        <tr onClick={handleCart}>
          <td className="ingredientName">{ingredientPair[0][0]}</td>
          <td className="ingredientQuantity">{ingredientPair[0][1]}</td>
          <td className="ingredientUnit">{ingredientPair[0][2]}</td>
          <td>
            <i className="fa fa-cart-plus" id="leftCol"></i>
          </td>
          <td className="ingredientName">{ingredientPair[1][0]}</td>
          <td className="ingredientQuantity">{ingredientPair[1][1]}</td>
          <td className="ingredientUnit">{ingredientPair[1][2]}</td>
          <td>
            <i className="fa fa-cart-plus" id="rightCol"></i>
          </td>
        </tr>
      );
    } else
      return (
        <tr onClick={handleCart}>
          <td className="ingredientName">{ingredientPair[0][0]}</td>
          <td className="ingredientQuantity">{ingredientPair[0][1]}</td>
          <td className="ingredientUnit">{ingredientPair[0][2]}</td>
          <td>
            <i className="fa fa-cart-plus" id="leftCol"></i>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
  });

  return (
    <div className="container ingredientContainer">
      <div className="ingredientTable">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col-3">Ingredient</th>
              <th className="col-1">Quantity</th>
              <th className="col-1">Unit</th>
              <th className="col-1 cart">
                <i className="fa fa-shopping-cart"></i>
              </th>
              <th className="col-3">Ingredient</th>
              <th className="col-1">Quantity</th>
              <th className="col-1">Unit</th>
              <th className="col-1">
                <i className="fa fa-shopping-cart"></i>
              </th>
            </tr>
          </thead>
          <tbody>{displayIngredients}</tbody>
        </table>
        {}
      </div>
    </div>
  );
};

export default Ingredient;
