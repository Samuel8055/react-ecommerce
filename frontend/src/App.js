import Product from "./components/Product";
import { data } from "./data";

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
        <div className="row center">
          {data.products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </main>

      <footer className="row center">All rights reserved.</footer>
    </div>
  );
};

export default App;
