import React from "react";

const IngredientsSearch = () => {
  return (
    <>
      <div id="inputAdd">
        <input placeholder="Ingredient"></input>
        <button>Add</button>
      </div>
      <div>
        <div className="searchBullet">Egg</div>
        <div className="searchBullet">Chicken</div>
        <div className="searchBullet">Salt</div>
      </div>
    </>
  );
};

export default IngredientsSearch;
