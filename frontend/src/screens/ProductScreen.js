import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader, Message, Rating } from "../components";
import { detailsProduct } from "../redux/actions/productActions";

const ProductScreen = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(params.id));
  }, [dispatch, params.id]);

  const addToCartHandler = () => {
    // props.history.push(`/cart/${params.id}?qty=${qty}`);
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  return (
    <div className="row center">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
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

                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>

                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (item) => (
                                  <option key={item + 1} value={item + 1}>
                                    {item + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>

                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add To Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
