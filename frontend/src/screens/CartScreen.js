import { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { Message } from "../components";

const CartScreen = () => {
  const params = useParams();
  const location = useLocation();
  const productId = params?.id;
  const qty = location?.search.split("=")[1];
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // Redirect to shipping
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Cart is empty <Link to="/">Shop</Link>
          </Message>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small" />
                  </div>

                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((item) => (
                        <option key={item + 1} value={item + 1}>
                          {item + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>${item.price}</div>

                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>

            <li>
              <button
                type="submit"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
