import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./components/search_results/SearchResults";
import Recipe from "./components/recipe/Recipe";
import SelectedMeal from "./meals/SelectedMeal";
import Favourites from "./components/favourites/Favourites";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/shopping-list">
          <Cart></Cart>
        </Route>
        <Route exact path="/search-results">
          <SearchResults></SearchResults>
        </Route>
        <Route exact path="/recipe">
          <Recipe></Recipe>
        </Route>
        <Route exact path="/selected-meal">
          <SelectedMeal></SelectedMeal>
        </Route>
        <Route exact path="/favourites">
          <Favourites></Favourites>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
