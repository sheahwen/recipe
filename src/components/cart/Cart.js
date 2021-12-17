import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const Cart = () => {
  const ingredientsArr = useSelector((state) => state.cart.cartIngredients);
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    dispatch(cartActions.removeIngredient(event.target.id));
  };

  const displayIngredients = ingredientsArr.map((ingredientObj, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{ingredientObj.name}</td>
        <td>{ingredientObj.quantity}</td>
        <td>{ingredientObj.unit}</td>
        <td>
          <button className="remove" onClick={handleRemove} id={index}>
            Remove from cart
          </button>
        </td>
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
            <th className="col-2">Action</th>
          </tr>
        </thead>
        <tbody>{displayIngredients}</tbody>
      </table>
    </div>
  );
};

export default Cart;
