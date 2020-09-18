import React from "react";

import "./Login.css";

const Login = () => {
  console.log("Login called");
  return (
    <div>
      <div className="abc">
        <form className="text-center border border-light p-5 win" action="#!">
          <p className="h4 mb-4">Sign in</p>

          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          ></input>

          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          ></input>

          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                ></input>
                <label
                  className="custom-control-label"
                  htmlFor="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="/forgot-password">Forgot password?</a>
            </div>
          </div>

          <button className="btn btn-info btn-block my-4" type="submit">
            Sign in
          </button>

          <p>
            Not a member?
            <a href="/signup">Register</a>
          </p>

          <p>or sign in with:</p>

          <button className="mx-2">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </button>
          <button className="mx-2">
            <i className="fab fa-twitter light-blue-text"></i>
          </button>
          <button className="mx-2">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </button>
          <button className="mx-2">
            <i className="fab fa-github light-blue-text"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
