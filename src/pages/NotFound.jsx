
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found</p>
        <Link to="/" className="not-found-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
