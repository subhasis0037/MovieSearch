import React from "react";

function Signup() {
  console.log("Sign up called");
  return (
    <div className="card">
      <h5 className="card-header info-color white-text text-center py-4">
        <strong>Sign up</strong>
      </h5>

      <div className="card-body px-lg-5 pt-0">
        <form className="text-center" style={{ color: "#757575" }} action="#!">
          <div className="form-row">
            <div className="col">
              <div className="md-form">
                <input
                  type="text"
                  id="materialRegisterFormFirstName"
                  className="form-control"
                ></input>
                <label htmlFor="materialRegisterFormFirstName">First name</label>
              </div>
            </div>
            <div className="col">
              <div className="md-form">
                <input
                  type="email"
                  id="materialRegisterFormLastName"
                  className="form-control"
                ></input>
                <label htmlFor="materialRegisterFormLastName">Last name</label>
              </div>
            </div>
          </div>

          <div className="md-form mt-0">
            <input
              type="email"
              id="materialRegisterFormEmail"
              className="form-control"
            ></input>
            <label htmlFor="materialRegisterFormEmail">E-mail</label>
          </div>

          <div className="md-form">
            <input
              type="password"
              id="materialRegisterFormPassword"
              className="form-control"
              aria-describedby="materialRegisterFormPasswordHelpBlock"
            ></input>
            <label htmlFor="materialRegisterFormPassword">Password</label>
            <small
              id="materialRegisterFormPasswordHelpBlock"
              className="form-text text-muted mb-4"
            >
              At least 8 characters and 1 digit
            </small>
          </div>

          <div className="md-form">
            <input
              type="password"
              id="materialRegisterFormPhone"
              className="form-control"
              aria-describedby="materialRegisterFormPhoneHelpBlock"
            ></input>
            <label htmlFor="materialRegisterFormPhone">Phone number</label>
            <small
              id="materialRegisterFormPhoneHelpBlock"
              className="form-text text-muted mb-4"
            >
              Optional - for two step authentication
            </small>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="materialRegisterFormNewsletter"
            ></input>
            <label
              className="form-check-label"
              htmlFor="materialRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>
          </div>

          <button
            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
          >
            Sign in
          </button>

          <p>or sign up with:</p>

          <button className="btn-floating btn-fb btn-sm">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="btn-floating btn-tw btn-sm">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="btn-floating btn-li btn-sm">
            <i className="fab fa-linkedin-in"></i>
          </button>
          <button className="btn-floating btn-git btn-sm">
            <i className="fab fa-github"></i>
          </button>

          <hr></hr>

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href="/terms-of-service" target="_blank">
              terms of service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
