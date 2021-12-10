import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import ShoppingPage from "./components/page_shoppingList/ShoppingPage";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/shopping-list">
          <ShoppingPage></ShoppingPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
