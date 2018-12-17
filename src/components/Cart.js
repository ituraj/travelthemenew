import React, { Component } from "react";
import "../styles/App.scss";

import mainImage from "../images/test.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faShoppingCart,
  faHeart,
  faMap
} from "@fortawesome/pro-light-svg-icons";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: ""
    };
  }

  render() {
    return (
      <div className="cart">
        <nav className="navbar navbar-light bg-white mt-0">
          <span className="navbar-brand mb-0">
            <Link to="/" className="navbar-brand text-dark">
              <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
              <span className="pl-2 text-primary">ENJOY</span>
            </Link>
          </span>
          <div>
            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Cart</span>
              </li>
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Shipping</span>
              </li>
              <li className="nav-item active">
                <span className="navbar-text pl-2 pr-2">Payment</span>
              </li>
            </ul>
          </div>
          <span className="navbar-text">
            <Link to="/login" className="nav-link">
              <span>Login | Register</span>
            </Link>
          </span>
        </nav>
        <div className="bg-white box-shadow box mx-auto my-5 p-5 checkout-form">
          {this.state.cart !== "" ? (
            <div className="empty-cart">
              <div className="row mx-auto">
                <div className="col">
                  <h4>Your backpack is empty.</h4>

                  <p>Check out our offer and go on an adventure!</p>
                </div>
              </div>
              <div className="row mx-auto justify-content-between">
                <h4 className="ml-3">Recommended for you:</h4>
                <button className="btn btn-outline-primary mr-3">
                  See more
                </button>
              </div>
              <div className="row mx-auto">
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12 mt-4">
                  <div className="card mx-auto">
                    <img
                      className="card-img-top"
                      src={mainImage}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">town</h6>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                      <div className="col-8">
                        <Link
                          to="/product"
                          className="text-dark d-flex align-items-center"
                        >
                          <span className="pr-0 pl-0">Explore</span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="2x"
                            className="pl-2"
                          />
                        </Link>
                      </div>
                      <div className="col-4 text-right text-nowrap">
                        <Link to="/cart" className="text-dark pr-2">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>

                        <Link to="/favorites" className="text-dark pl-2">
                          <FontAwesomeIcon icon={faHeart} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12 mt-4">
                  <div className="card mx-auto">
                    <img
                      className="card-img-top"
                      src={mainImage}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">town</h6>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                      <div className="col-8">
                        <Link
                          to="/product"
                          className="text-dark d-flex align-items-center"
                        >
                          <span className="pr-0 pl-0">Explore</span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="2x"
                            className="pl-2"
                          />
                        </Link>
                      </div>
                      <div className="col-4 text-right text-nowrap">
                        <Link to="/cart" className="text-dark pr-2">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>

                        <Link to="/favorites" className="text-dark pl-2">
                          <FontAwesomeIcon icon={faHeart} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12 mt-4">
                  <div className="card mx-auto">
                    <img
                      className="card-img-top"
                      src={mainImage}
                      alt="Card cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">town</h6>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center py-2 px-4">
                      <div className="col-8">
                        <Link
                          to="/product"
                          className="text-dark d-flex align-items-center"
                        >
                          <span className="pr-0 pl-0">Explore</span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            size="2x"
                            className="pl-2"
                          />
                        </Link>
                      </div>
                      <div className="col-4 text-right text-nowrap">
                        <Link to="/cart" className="text-dark pr-2">
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>

                        <Link to="/favorites" className="text-dark pl-2">
                          <FontAwesomeIcon icon={faHeart} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="checkout-cart">
              <div className="login-header text-center">
                <h4>Shopping Cart</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
