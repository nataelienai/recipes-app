import React, { useContext } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeaderContext from './context/header/HeaderContext';
import LoginProvider from './context/login/LoginProvider';
import Explore from './pages/Explore';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreFoods from './pages/ExploreFoods';
import Login from './pages/Login';

function App() {
  const { setSearchButton, setpageDrinkOrFood } = useContext(HeaderContext);
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/">
        <LoginProvider>
          <Login />
        </LoginProvider>
      </Route>
      <Route exact path="/foods">
        <Header />
        { setpageDrinkOrFood('Food')}
        {setSearchButton((true))}
      </Route>
      <Route exact path="/drinks">
        <Header />
        { location.pathname === '/drinks'
         && setpageDrinkOrFood('Drink')}
        {setSearchButton((true))}
      </Route>
      <Route exact path="/explore">
        <Explore />
      </Route>
      <Route exact path="/explore/foods">
        <ExploreFoods />
      </Route>
      <Route exact path="/explore/drinks">
        <ExploreDrinks />
      </Route>
      <Route exact path="/explore/foods/ingredients">
        <ExploreFoodIngredients />
      </Route>
      <Route exact path="/explore/drinks/ingredients">
        <ExploreDrinkIngredients />
      </Route>
    </Switch>
  );
}

export default App;
