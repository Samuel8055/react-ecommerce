import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productDetailsReducer, productListReducers } from "./productReducers";

export const allReducers = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
