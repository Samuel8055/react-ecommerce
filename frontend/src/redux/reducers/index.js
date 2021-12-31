import { combineReducers } from "redux";
import { productListReducers } from "./productReducers";

export const allReducers = combineReducers({
  productList: productListReducers,
});
