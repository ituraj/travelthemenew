import React from "react";
import "../styles/App.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faUser,
  faUnlock,
  faEnvelope
} from "@fortawesome/pro-light-svg-icons";
import { Link } from "react-router-dom";

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className="login">
        <nav className="navbar navbar-light shadow-sm bg-white">
          <span className="navbar-brand mb-0 h1">
            <Link to="/" className="navbar-brand text-dark">
              <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
              <span className="pl-2 text-primary">ENJOY</span>
            </Link>
          </span>
        </nav>
        {this.props.user === "registered" && this.props.loggedIn === false ? (
          <div className="login-form-wrapper">
            <div className="bg-white box-shadow box mx-auto my-5 p-5 login-form">
              <div className="login-header text-center">
                <h4>Hello World!</h4>
              </div>
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    <h6>Email</h6>
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      value={this.props.email}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    <h6>Password</h6>
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faUnlock} />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      value={this.props.password}
                      onChange={this.props.handleChange}
                      style={{ height: "40px" }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-primary"
                        type="submit"
                        onClick={this.props.handleLoggedInUser}
                      >
                        <Link to="/" className="react-link">
                          Log In
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : this.props.user === "" ? (
          <div className="register-form-wrapper">
            <div className="bg-white box-shadow box mx-auto my-5 p-5 login-form">
              <div className="login-header text-center">
                <h4>Hello World!</h4>
              </div>
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail3">
                    <h6>Name</h6>
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon3">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon3"
                      value={this.props.name}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    <h6>Email</h6>
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      value={this.props.email}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    <h6>Password</h6>
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <FontAwesomeIcon icon={faUnlock} />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      value={this.props.password}
                      onChange={this.props.handleChange}
                      style={{ height: "40px" }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-primary"
                        type="submit"
                        onClick={this.props.handleNewUser}
                      >
                        <Link to="/" className="react-link">
                          Register
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group form-check d-flex mt-4 mb-0 mx-auto justify-content-center">
                  <div className="">
                    <input
                      type="checkbox"
                      name="subscribe"
                      className="form-check-input"
                      id="exampleCheck1"
                      checked={this.props.subscribed}
                      onChange={this.props.handleChange}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      <h6>Subscribe for more travel inspiration.</h6>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Login;
