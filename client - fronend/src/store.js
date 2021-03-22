import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import { productReducer } from "./Reducers/ProductReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];

const store = createStore(
  productReducer,
  compose(applyMiddleware(...middleware))
);

export default store;
