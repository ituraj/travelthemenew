import React, { Component } from "react";
import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faMap,
  faBars,
  faTimes
} from "@fortawesome/pro-light-svg-icons";
// import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      overlay: false
    };
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay() {
    this.setState({
      overlay: !this.state.overlay
    });
  }

  render() {
    const width = window.innerWidth;
    if (width >= 768) {
      return (
        <div className="header">
          <nav className="navbar fixed-top navbar-expand-md bg-white shadow-sm">
            <Link to="/" className="navbar-brand text-dark">
              <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
              <span className="pl-2 text-primary">ENJOY</span>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarMobile"
            >
              <div className="navbar-nav">
                <Link to="/shop" className="nav-item nav-link text-dark">
                  Destinations
                </Link>
                <Link to="/contact" className="nav-item nav-link text-dark">
                  Contact
                </Link>
                <Link to="/blog" className="nav-item nav-link text-dark">
                  Blog
                </Link>
              </div>
              <div className="navbar-nav">
                {this.props.loggedIn === true ? (
                  <Link
                    to={this.context.router.history.goBack}
                    onClick={this.props.handleLogOut}
                    className="nav-item nav-link text-dark"
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login" className="nav-item nav-link text-dark">
                    <span>Log In | Register</span>
                  </Link>
                )}

                <Link to="/cart" className="nav-item nav-link text-dark">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className={
                      this.state.added ? "cart-icon primary" : "cart-icon"
                    }
                  />
                </Link>
                <Link to="/favorites" className="nav-item nav-link text-dark">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={
                      this.state.favorite
                        ? "favorite-icon danger"
                        : "favorite-icon"
                    }
                  />
                </Link>
              </div>
            </div>
          </nav>
          <div className="container-fluid px-0">
            <div className="header-test" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="row justify-content-between bg-light shadow-sm mobile-nav">
            <div className="col-4 ml-3 py-3">
              <Link to="/">
                <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
                <span className="pl-2 text-primary">ENJOY</span>
              </Link>
            </div>
            <div
              className="col-2 text-center align-self-center mr-2 py-1 pr-4"
              onClick={this.handleOverlay}
            >
              {" "}
              <FontAwesomeIcon icon={faBars} style={{ color: "#9cc2da" }} />
            </div>
          </div>
          <div className="container-fluid px-0">
            <div className="header-test" />
          </div>
          <div
            id="overlay"
            className={
              this.state.overlay === false ? "d-none" : "d-block bg-light"
            }
          >
            <div className="row justify-content-between bg-light mx-auto">
              <div className="col-4 py-3">
                <Link to="/">
                  <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
                  <span className="pl-2 text-primary">ENJOY</span>
                </Link>
              </div>
              <div
                className="col-2 text-center align-self-center py-1"
                onClick={this.handleOverlay}
              >
                {" "}
                <FontAwesomeIcon icon={faTimes} style={{ color: "#9cc2da" }} />
              </div>
            </div>
            <div className="row h-100">
              <div className="col-12 mt-5">
                <div className="row mx-auto mt-5 justify-content-center">
                  <div className="col-12 text-center">
                    <Link
                      to="/shop"
                      className="nav-item nav-link text-dark py-3"
                      onClick={this.handleOverlay}
                    >
                      Destinations
                    </Link>
                    <Link
                      to="/contact"
                      className="nav-item nav-link text-dark py-3"
                      onClick={this.handleOverlay}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/blog"
                      className="nav-item nav-link text-dark py-3"
                      onClick={this.handleOverlay}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 text-center">
                    {this.props.loggedIn === true ? (
                      <Link
                        to={this.context.router.history.goBack}
                        onClick={this.props.handleLogOut}
                        className="nav-item nav-link text-dark"
                      >
                        <span onClick={this.handleOverlay}>Log Out</span>
                      </Link>
                    ) : (
                      <Link to="/login" className="nav-item nav-link text-dark">
                        <span>Log In | Register</span>
                      </Link>
                    )}
                  </div>
                  <div className="col-12">
                    <div className="row justify-content-center mx-auto">
                      <Link
                        to="/cart"
                        className="text-dark px-3 py-2"
                        onClick={this.handleOverlay}
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className={
                            this.state.added ? "cart-icon primary" : "cart-icon"
                          }
                        />
                      </Link>
                      <Link
                        to="/favorites"
                        className="text-dark px-3 py-2"
                        onClick={this.handleOverlay}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={
                            this.state.favorite
                              ? "favorite-icon danger"
                              : "favorite-icon"
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Navbar;
