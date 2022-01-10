import React from "react";
import { useParams, useLocation } from "react-router-dom";

const CartScreen = () => {
  const params = useParams();
  const location = useLocation();
  const id = params.id;
  const qty = location.search.split("=")[1];

  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        Add to Cart: ProductId: {id} Qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
