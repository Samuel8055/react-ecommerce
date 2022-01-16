import { combineReducers } from "redux";
import { cartReducer } from "./cartReducers";
import { productDetailsReducer, productListReducers } from "./productReducers";
import { registerReducer, signinReducer } from "./signinReducers";

export const allReducers = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: signinReducer,
  userRegister: registerReducer,
});
