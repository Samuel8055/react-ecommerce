import { Route, Routes, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import { signout } from "./redux/actions/signinActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/" className="brand">
            Le Boutique
          </Link>
        </div>
        <div>
          <Link to="/cart">
            Cart{" "}
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
              </Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/shipping" element={<ShippingAddressScreen />} />
        </Routes>
      </main>

      <footer className="row center">All rights reserved.</footer>
    </div>
  );
};

export default App;
