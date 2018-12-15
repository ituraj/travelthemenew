import React, { Component } from "react";
import "../styles/App.scss";

import mainImage from "../images/test.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cart">
        <nav className="navbar navbar-light bg-white">
          <span className="navbar-brand mb-0 h1">Logo</span>
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
              <span>Login/Register</span>
            </Link>
          </span>
        </nav>
        <div className="row mx-auto">
          <div className="col">
            <h4>Your backpack is empty.</h4>
            <p>Check out our offer and go on an adventure!</p>
            <button className="btn btn-secondary">Explore</button>
          </div>
        </div>
        <div className="row mx-auto justify-content-between">
          <h4 className="ml-3">Recommended for you:</h4>
          <button className="btn btn-outline-primary mr-3">See more</button>
        </div>
        <div className="row mx-auto">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 my-4">
            <div className="card mx-auto">
              <img className="card-img-top" src={mainImage} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="/product"
                  className="text-dark d-flex align-items-center"
                >
                  <span>Explore</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    className="pl-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 my-4">
            <div className="card mx-auto">
              <img className="card-img-top" src={mainImage} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="/product"
                  className="text-dark d-flex align-items-center"
                >
                  <span>Explore</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    className="pl-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 my-4">
            <div className="card mx-auto">
              <img className="card-img-top" src={mainImage} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="/product"
                  className="text-dark d-flex align-items-center"
                >
                  <span>Explore</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    className="pl-2"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 my-4">
            <div className="card mx-auto">
              <img className="card-img-top" src={mainImage} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="/product"
                  className="text-dark d-flex align-items-center"
                >
                  <span>Explore</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="2x"
                    className="pl-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
