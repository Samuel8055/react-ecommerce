import { Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="brand">
            Le Boutique
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
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
