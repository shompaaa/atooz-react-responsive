import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="banner container">
      <div className="login-form mx-auto border p-4 rounded shadow">
        <h2 className="text-primary text-center">Login To Your Account</h2>
        <form action="" className="">
          <div>
            <label htmlFor="" className="mb-2">
              Email
            </label>
            <br />
            <input
              className="border-0 py-2 w-100 rounded-2"
              type="email"
              name=""
              id=""
            />
            <br />
            <br />
            <label htmlFor="" className="mb-2">
              Password
            </label>
            <br />
            <input
              className="border-0 py-2 w-100 rounded-2"
              type="password"
              name=""
              id=""
            />
            <br />
            <br />
            <input
              className="btn btn-primary w-100 fw-bold"
              type="submit"
              value="Login"
            />
          </div>
          <p className="text-center mt-1">
            Don't have an account? Please{" "}
            <Link className="link" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
