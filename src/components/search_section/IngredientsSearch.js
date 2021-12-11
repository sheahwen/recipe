import React from "react";

const IngredientsSearch = () => {
  return (
    <div className="col-3">
      <p className="searchBy">Ingredients</p>
      <div id="inputAdd">
        <input placeholder="Ingredient"></input>
        <button>Add</button>
      </div>
      <div>
        <div className="searchBullet">Egg</div>
        <div className="searchBullet">Chicken</div>
        <div className="searchBullet">Salt</div>
      </div>
    </div>
  );
};

export default IngredientsSearch;
