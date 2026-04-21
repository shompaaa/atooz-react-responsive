import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="banner text-center">
      <h1 className="text-danger fw-bold display-1">404</h1>
      <h4 className="display-6 fw-bold mb-3">Opps! Page Not Found</h4>
      <Link to='/'>
        <button className="bg-danger p-2 text-white fw-bold border-0 rounded-2">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
