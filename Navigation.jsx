import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="home" id="home">
        Home
      </Link>
      <Link to="login" id="login">
        Login
      </Link>
      <Link to="signup" id="signup">
        Signup
      </Link>

      <Link to="wishlist" id="wishlist">
        WishList
      </Link>
      
      </div>

  );
};

export default Navigation;
