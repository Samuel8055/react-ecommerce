import React from "react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "../components";
import { data } from "../data";

const ProductScreen = (props) => {
  let params = useParams();
  const product = data.products.find((product) => product._id === params.id);

  if (!product) {
    return <div>No product found!</div>;
  }

  return (
    <div>
      <Link to="/">Back to results</Link>
      <div className="row top">
        <div className="col-2">
          <img src={product.image} alt={product.name} className="large" />
        </div>

        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price: ${product.price}</li>
            <li>
              <p>Description:</p>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price: </div>
                  <div className="price">${product.price}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Status: </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In stock</span>
                    ) : (
                      <span className="danger">Not available</span>
                    )}
                  </div>
                </div>
              </li>

              <li>
                <button className="primary block">Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
