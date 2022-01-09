import { combineReducers } from "redux";
import { productDetailsReducer, productListReducers } from "./productReducers";

export const allReducers = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
});
