import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const params = useParams();
  const location = useLocation();
  const productId = params?.id;
  const qty = location?.search.split("=")[1];
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        Add to Cart: ProductId: {productId} Qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
