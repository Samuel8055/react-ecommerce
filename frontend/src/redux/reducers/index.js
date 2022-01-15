import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productDetailsReducer, productListReducers } from "./productReducers";
import { signinReducer } from "./signinReducers";

export const allReducers = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: signinReducer,
});
