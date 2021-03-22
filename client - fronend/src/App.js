import React from "react";
import { Provider } from "react-redux";
import store from './store';

import "./App.css";
// import { Route, Switch } from 'react-router-dom';
// import Auth from './Authentication/auth';
import NavItems from "../src/Navigation/NavItems";
// import Cart from './component/cart/Cart'
import { BrowserRouter } from "react-router-dom";
// import Product from '../src/component/Products/Product';
// import Products1 from '../src/component/Product1/Products1'
// import Show from '../src/show';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavItems />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
