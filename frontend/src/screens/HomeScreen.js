import React from "react";
import Product from "../components/Product";
import { data } from "../data";

const HomeScreen = () => {
  return (
    <div className="row center">
      {data.products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};

export default HomeScreen;
