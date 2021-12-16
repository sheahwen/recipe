import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const ingredientsArr = useSelector((state) => state.cart.cartIngredients);

  const displayIngredients = ingredientsArr.map((ingredientObj, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{ingredientObj.name}</td>
        <td>{ingredientObj.quantity}</td>
        <td>{ingredientObj.unit}</td>
        <td className="remove">Remove from cart</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>Time to go shopping!</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-1 cart">#</th>
            <th className="col-7">Ingredient</th>
            <th className="col-1">Quantity</th>
            <th className="col-1">Unit</th>
            <th className="col-2">Remove</th>
          </tr>
        </thead>
        <tbody>{displayIngredients}</tbody>
      </table>
    </div>
  );
};

export default Cart;
