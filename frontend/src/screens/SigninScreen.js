import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/actions/signinActions";
import { Loader, Message } from "../components";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign in</h1>
        </div>

        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>

        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create an account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
