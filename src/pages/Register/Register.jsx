import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="banner container">
      <div className="login-form mx-auto border p-4 rounded shadow">
        <h2 className="text-primary text-center">Please Register</h2>
        <form action="" className="">
          <div>
            <label htmlFor="" className="mb-2">
              Full Name
            </label>
            <br />
            <input
              className="border-0 py-2 w-100 rounded-2"
              type="text"
              name=""
              id=""
            />
            <br />
            <br />
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
              Phone
            </label>
            <br />
            <input
              className="border-0 py-2 w-100 rounded-2"
              type="text"
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
              value="Register"
            />
          </div>
          <p className="text-center mt-1">
            Already have an account? Please{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
