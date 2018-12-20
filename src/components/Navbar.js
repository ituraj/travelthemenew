import React, { Component } from "react";
import "../styles/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faMap
} from "@fortawesome/pro-light-svg-icons";

import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mobileMenuToggle() {
    var navbarMobile = document.getElementById("navbarMobile");
    return navbarMobile.classList.add("show");
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar fixed-top navbar-expand-md bg-white shadow-sm">
          <Link to="/" className="navbar-brand text-dark">
            <FontAwesomeIcon icon={faMap} style={{ color: "#9cc2da" }} />
            <span className="pl-2 text-primary">ENJOY</span>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMobile"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.mobileMenuToggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
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
              <Link to="/login" className="nav-item nav-link text-dark">
                {this.props.user === "registered" ? (
                  <span>Log Out</span>
                ) : (
                  <span>Log In</span>
                )}
              </Link>
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
  }
}

export default Navbar;
