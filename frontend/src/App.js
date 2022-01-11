import { Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log("cartItems: ", cartItems);

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
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id" element={<CartScreen />} />
        </Routes>
      </main>

      <footer className="row center">All rights reserved.</footer>
    </div>
  );
};

export default App;
