import React from 'react';
import Basket from '../pages/basket/basket';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';
import {AppRoutes} from '../../const';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.CATALOG}>
          <Catalog/>
        </Route>
        <Route exact path={AppRoutes.BASKET}>
          <Basket/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
