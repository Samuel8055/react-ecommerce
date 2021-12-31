import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Message, Product } from "../components";
import { listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="row center">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))
      )}
    </div>
  );
};

export default HomeScreen;
